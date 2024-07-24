import React from "react";

const RiskManagement = () => {
  return (
    <div className="marginal mb-8 p-4">
      {/* Header */}
      <div className=" mt-5">
        <h1 className='font-bold lg:text-7xl text-4xl text-orange my-10'>
          Risk Management
        </h1>
      </div>

      {/* Mitigating Threats Proactively */}
      <div className="flex flex-col md:flex-row gap-8 mt-5">
        <div className="md:w-2/3">
          <h4 className='text-blue font-semibold lg:text-4xl text-3xl mb-3'>
            Mitigating Threats Proactively
          </h4>
          <p className="text-[#575756]">
            Our risk management framework enables us to mitigate threats and
            devise measures to prevent unforeseen circumstances. With the
            integration of digital tools, we have adopted a dynamic approach
            that ensures thorough oversight across all operational levels.
            Advanced technologies are leveraged to efficiently identify, assess
            and mitigate potential risks while safeguarding our reputation and
            financial health.
          </p>
          <br />
          <p className="text-[#575756]">
            The major areas of Risk landscape include Credit Risk, Liquidity
            Risk, Digital Risk, ESG Risk, Third-Party Risk, Collateral Risk and
            Operational Risk.
          </p>
        </div>
        <div className="md:w-1/2">
          <img className="w-full" src="./Risk/Risk1.png" alt="Risk Management" />
        </div>
      </div>

      {/* Risk Assessment Methodology */}
      <div className="mt-10">
        <h4 className='text-blue font-semibold lg:text-4xl text-3xl mb-3'>
          Risk Assessment Methodology
        </h4>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-5">
        <div className="md:w-1/2">
          <img className="w-full" src="./Risk/Risk2.png" alt="Risk Assessment Methodology" />
          <p className="mt-5 text-[#575756]">
            A comprehensive understanding of risk management throughout the various
            levels of an organisation helps in driving key decisions related to
            risk-return balance, capital allocation and product pricing.
            Additionally, it is also ensured that there is appropriate focus on
            managing risks proactively by ensuring business operations are in
            accordance with laid-down risk. Our risk management team is guided by
            the Company’s Risk Management Committee and the Senior Management to
            develop and implement Risk Assurance practices on a pan-organisational
            basis.
          </p>
        </div>
        <div className="md:w-1/2">
          <img className="w-full" src="./Risk/Risk3.png" alt="Risk Management Team" />
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;
