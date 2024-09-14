import PropTypes from "prop-types";

const ProgressComponent = ({ steps, currentStep, descriptions }) => {
  return (
    <div className="col-span-1 bg-slate-50 p-6 flex flex-col items-center justify-center w-full">
      <div className="flex items-center gap-12 max-w-lg">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-full ">
            {/* دائرة الخطوة */}
            <div className="flex items-center">
              <div
                className={`h-9 w-9  capitalize  flex items-center justify-center rounded-full border-2 ${
                  index + 1 === currentStep
                    ? "bg-green-500   border-green-500 text-white "
                    : index + 1 < currentStep
                    ? "bg-green-500 border-green-500 text-white"
                    : "bg-white border-green-500 text-green-500"
                }`}
              >
                {step}
              </div>
            </div>
            {/* الوصف أسفل كل خطوة */}
            <span className="mt-2 capitalize text-sm text-center w-full text-gray-500">
              {descriptions[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

ProgressComponent.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentStep: PropTypes.number.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProgressComponent;
