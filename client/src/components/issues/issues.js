import { PieChart } from "@mui/x-charts"

const Issues = () => {
    return (
        <div className="h-full p-16 w-full">
            <PieChart
                colors={['#fff', '#000', 'red']}
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                        ],
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 2,
                        cornerRadius: 3,
                        startAngle: 0,
                        endAngle: 360,
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    )
}

export default Issues