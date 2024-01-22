```bash
pip install requirements.txt
```

##Additional installations to be carried out :

  ```bash
  pip install git+https://github.com/openai/whisper.git
  ```
-> normal pip install whisper downloads a different module
#Note: 
    ```bash
    pip install tokenizers
    ```
    before you
    ```bash
    pip install transformers
    ```
    Ubuntu:
      ```bash
      sudo apt-get install ffmpeg
      sudo apt-get install portaudio19-dev
      ```
    Macos:
      ```bash
      brew install ffmpeg
      brew install portaudio19-dev
      ```


#1. ML Models to be obtained by training the models using the given model codes.
2.1.1 Speech recognition model - recog_speechhybrid.h5 - pretrained model 
2.1.2 Code for Speech recognition model - speechRecognition.py
2.2.1 Code for issue classification model - issue_classify.py
2.2.2 Code to create the issue classify dataset - issues_classify_dataset_creator.py
2.2.3 Created Dataset for issue classify - issue_dataset.csv
2.3 Run the given test files to test your trained model with custom prediction.