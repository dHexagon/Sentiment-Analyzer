import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import axios from "axios";
import LoadingOverlay from 'react-loading-overlay';
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import { useNavigate } from "react-router-dom";
import { useLevelContext } from "../../utils/context";

const blobToBase64 = blob => {
  console.log(blob.blob instanceof Blob)
  const reader = new FileReader();
  reader.readAsDataURL(blob.blob);
  return new Promise(resolve => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};

const Inputs = () => {
  const [mediaStream, setMediaStream] = useState(null);
  const [blob, setBlob] = useState(null)
  const {loading,setLoading} = useLevelContext();

  const [recordState, setRecordState] = useState(RecordState.None)

  const navigate = useNavigate()

  useEffect(() => {
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
        setMediaStream(null);
      }
    };
  }, [mediaStream]);

  const getMicrophoneAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMediaStream(stream);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);

  const [uploadType, setUploadType] = useState(0);

  const [selected, setSelected] = useState(-1);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => {
    setUploadType(0);
    setOpen2(false);
  };

  const [empName, setEmpName] = useState("");
  const [empPwd, setEmpPwd] = useState("");

  const [file, setFile] = useState(null);
  const [employeeName, setEmployeeName] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUsernameChange = (event) => {
    setEmployeeName(event.target.value);
  };

  const uploadFile = () => {
    setLoading(true)
    const formData = new FormData();
    formData.append("music_file", file, file.name);
    formData.append("username", employeeName);

    fetch("/admin/audio_upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false)

        console.log(data);
        handleClose2();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(false)

      });
  };

  const uploadAudio = async (audioData) => {
    setLoading(true)
    console.log(audioData)
    const data = await blobToBase64(audioData);

    axios
      .post(
        "/admin/input/voice",
        { base64: data },
      )
      .then((res) => {
        console.log("yeahh!");
        if (res.data.message ==="Audio Converted") {
          console.log("suuc")
          axios
            .post(
              "/admin/input/voice_upload",
            )
            .then((res)=>{
              if(res.data.message=="Audio Upload Successful"){
                setLoading(false)
                navigate(`/details/${res.data.call_id}`)
              }
            })
          handleClose2();
        }
      })
      .catch((err) => {
        console.log("Error while assing employee! ", err.message, err);
        setLoading(false)

      });
  };

  const addEmployee = (e) => {
    e.preventDefault();
    axios
      .post(
        "/admin/add_employee",
        { username: empName, password: empPwd },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.message === "Employee added successfully") {
          console.log("Employee addedd successfully!");
          handleClose1();
        }
      })
      .catch((err) => {
        console.log("Error while assing employee! ", err.message, err);

      });
  };

  const start = () => {

    setRecording(true);
    setRecordState(RecordState.START);
  };
  const stop = () => {
    setRecording(false);
    setRecordState(RecordState.STOP);
  };

  useEffect(() => {
    if (blob) {
      const file = new File([blob], 'recordedAudio.wav', {
        type: 'audio/wav',
        lastModified: Date.now(),
      });
      setFile(file);
      console.log('File updated:', file);
      uploadFile();
    }
  }, [blob]);

  //35 of screen, 40 of 80
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div
        onClick={handleOpen1}
        className={`flex items-center h-1/2 w-[80%] rounded-xl cursor-pointer ${selected === 0 ? "bg-black text-mainPink" : ""
          }`}
        onMouseEnter={() => {
          setSelected(0);
        }}
        onMouseLeave={() => {
          setSelected(-1);
        }}
      >
        <img src="/assets/dashboard/inputUser.svg" alt="" className="ml-10" />
        <span className="text-2xl font-josefinSans font-medium ml-10">
          New Employee
        </span>
      </div>
      <div
        onClick={handleOpen2}
        className={`flex items-center h-1/2 w-[80%] rounded-xl cursor-pointer ${selected === 1 ? "bg-black text-mainPink" : ""
          }`}
        onMouseEnter={() => {
          setSelected(1);
        }}
        onMouseLeave={() => {
          setSelected(-1);
        }}
      >
        <img src="/assets/dashboard/inputAudio.svg" alt="" className="ml-10" />
        <span className="text-2xl font-josefinSans font-medium ml-10">
          New Audio Input
        </span>
      </div>
      <Modal open={open1} onClose={handleClose1}>
        <div className="absolute translate-x-[-50%] translate-y-[-50%] w-1/4 h-auto left-[50%] top-[50%] bg-white p-7 rounded-md flex flex-col items-center justify-around">
          <div className=" font-josefinSans font-semibold text-[2.4rem] text-mainPink">
            New Employee
          </div>
          <form className="w-[100%] flex-col justify-center align-middle mt-5">
            <label className="font-lato text-[16px]" />
            Employee Name
            <br />
            <input
              type="text"
              className="w-full h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
              onChange={(e) => {
                setEmpName(e.target.value);
              }}
            />
            <br />
            <br />
            <label className="font-lato text-[16px]" />
            Password
            <br />
            <input
              type="password"
              className="w-full h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
              onChange={(e) => {
                setEmpPwd(e.target.value);
              }}
            />
          </form>
          <button
            className="text-black text-3xl font-bold font-josefinSans justify-center items-center gap-2.5 pt-4 pb-2.5 px-[83px] rounded-[8px] bg-mainPink mt-8 cursor-pointer hover:bg-[#18072B] hover:text-white transition-all duration-200"
            onClick={(e) => {
              addEmployee(e);
            }}
          >
            Add
          </button>
        </div>
      </Modal>

      <Modal open={open2} onClose={handleClose2}>
        <div className="absolute translate-x-[-50%] translate-y-[-50%] w-1/4 min-h-[50%] h-auto left-[50%] top-[50%] bg-white p-7 rounded-md flex flex-col items-center justify-around">
          {uploadType === 0 ? (
            <>
              <div className="h-full w-full flex flex-col text-center">
                <div
                  className=" mb-10 h-16 w-full font-josefinSans text-2xl font-semibold flex flex-col justify-center rounded-2xl cursor-pointer bg-mainPink hover:bg-black hover:text-mainPink"
                  onClick={() => {
                    setUploadType(1);
                  }}
                >
                  Record and test a live audio
                </div>
                <br />
                <div
                  className="mb-10 h-16 w-full font-josefinSans text-2xl font-semibold flex flex-col justify-center rounded-2xl cursor-pointer bg-mainPink hover:bg-black hover:text-mainPink"
                  onClick={() => {
                    setUploadType(2);
                  }}
                >
                  Upload single audio file
                </div>
                <br />
                <div
                  className=" h-16 w-full font-josefinSans text-2xl font-semibold flex flex-col justify-center rounded-2xl cursor-pointer bg-mainPink hover:bg-black hover:text-mainPink"
                  onClick={() => {
                    setUploadType(3);
                  }}
                >
                  Upload in bulk
                </div>
              </div>
            </>
          ) : uploadType === 1 ? (
            // Live audio
            <>
              <div className="h-96 flex flex-col justify-around">
                <button onClick={getMicrophoneAccess} disabled={recording}>
                  <div className="underline font-josefinSans text-3xl text-mainPink font-medium">Get Microphone Access</div>
                </button>
                <AudioReactRecorder
                  className="rounded-xl"
                  canvasWidth={320}
                  canvasHeight={100}
                  state={recordState}
                  onStop={(audioData) => {
                    uploadAudio(audioData)
                    setRecordState(RecordState.NONE);
                  }}
                />
                <button
                  onClick={start}
                >
                  Start Recording
                </button>
                <button onClick={stop}
                >
                  Stop Recording
                </button>
                <div className="text-center">
                  {`${!recording ? "Not recording" : "Recording in progress..."
                    }`}
                </div>
              </div>
            </>
          ) : uploadType === 2 ? (
            <>
              <div className=" font-josefinSans font-semibold text-[2.4rem] text-mainPink">
                New Audio
              </div>
              <form
                className="w-[100%] flex-col justify-center align-middle mt-5"
                enctype="multipart/form-data"
              >
                <label className="font-lato text-[16px]" />
                Employee id
                <br />
                <input
                  type="text"
                  className="w-full h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
                  onChange={handleUsernameChange}
                />
                <br />
                <br />
                <label className="font-lato text-[16px]" />
                Audio
                <br />
                <input
                  type="file"
                  accept=".wav"
                  className=" mt-2 block w-full text-xl text-black
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-xl file:font-semibold
                        file:bg-black file:text-mainPink
                        hover:file:bg-white cursor-pointer"
                  onChange={handleFileChange}
                />
              </form>
              <button
                className="text-black text-3xl font-bold font-josefinSans justify-center items-center gap-2.5 pt-4 pb-2.5 px-[83px] rounded-[8px] bg-mainPink mt-8 cursor-pointer hover:bg-[#18072B] hover:text-white transition-all duration-200"
                onClick={uploadFile}
              >
                Feed
              </button>
            </>
          ) : uploadType === 3 ? (
            <></>
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default Inputs;
