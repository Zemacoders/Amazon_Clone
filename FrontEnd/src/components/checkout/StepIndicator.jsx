const Circle = ({ step, currentIndex }) => {
    return (
        <div
            className={`w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center
                rounded-full border-2 sm:border-4 select-none transition-colors duration-300
                ease-in-out ${
                    step === currentIndex
                        ? "text-yellow-500 border-yellow-500"
                        : step < currentIndex
                        ? "bg-white border-gray-300 text-gray-500"
                        : "bg-yellow-500 border-yellow-500 text-white"
                }`}
        >
            {currentIndex}
        </div>
    );
};

const StepIndicator = ({ step }) => {
    const steps = ["Cart", "Address", "Payment", "Review"];

    return (
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto mb-6">
            
            {steps.map((label, index) => (
                <div key={index} className="flex items-start w-full flex-col">
                    {/* Circle*/}
                    <div className="flex items-center  w-full">
                        <Circle step={step} currentIndex={index + 1} />
                       
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                        <div className="flex-grow h-[2px] sm:h-1 relative">
                            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 h-full w-full bg-gray-300" />
                            <div
                                className={`absolute top-1/2 transform -translate-y-1/2 left-0 h-full w-full bg-yellow-500
                                    transition-transform duration-300 ease-in-out origin-left
                                    ${step > index + 1 ? "scale-x-100" : "scale-x-0"}
                                    `}
                                    />
                        </div>
                    )}
                    </div>
                    {/* Label */}
                    <p className={`text-sm sm:text-base text-center mt-2 sm:mt-1 font-semibold ${
                        step === index + 1 ? "text-yellow-500" : step > index + 1 ? "text-gray-500" : "text-gray-300"
                    }`}>
                        {label}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default StepIndicator;
