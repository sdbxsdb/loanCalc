import { useState } from "react";
import Script from "next/script";

export default function Home() {
  const [loanType, setLoanType] = useState("Select Loan Type");
  const [loanAmount, setLoanAmount] = useState(1000);
  const [loanTerm, setLoanTerm] = useState(4);
  const [schedule, setSchedule] = useState("monthly");

  const loanTermYears = loanTerm / 12;

  const percentageModifier = 1;
  const percentage = (6.05 * percentageModifier) / 10;

  const repayable = loanAmount * percentage;

  function updateSchedule(e, scheduleValue) {
    e.preventDefault();
    setSchedule(scheduleValue);
  }

  console.log(loanType);

  return (
    <section>
      {/*This is pulling in older JS from an external file which is changing the input range color.  We import Script from next/script to use this*/}
      <Script type="text/javascript" src="js/calcInputRange.js"></Script>

      <div className="w-full lg:w-7/12 max-w-[754px] text-white">
        <div className="w-screen md:w-auto p-14 bg-darkestBlue md:rounded-2xl">
          <form action="" className="flex flex-col gap-y-10">
            <div className="w-full bg-primary rounded-full pr-4">
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                name="loanType"
                id=""
                className="p-[24px] bg-primary rounded-full w-full focus:outline-none cursor-pointer"
              >
                <option value="Select Loan Type" disabled>
                  Select Loan Type
                </option>
                <option value="Personal Loan up to £7,500">
                  Personal Loan up to £7,500
                </option>
                <option value="Personal Loan £7,500 to £15,000">
                  Personal Loan £7,500 to £15,000
                </option>
                <option value="Personal Loan £15,000 to £25,000">
                  Personal Loan £15,000 to £25,000
                </option>
                <option value="Secured / Share Secured Personal Loan up to £100,000">
                  Secured / Share Secured Personal Loan up to £100,000
                </option>
                <option value="Share-Secure Loan up to £50,000">
                  Secured / Share Secured Loan up to £50,000
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-y-10">
              <div className="flex flex-col gap-y-6">
                <div className="flex justify-between w-full">
                  <label
                    htmlFor="loanAmount"
                    className="text-1xs opacity-50 font-acumin font-light"
                  >
                    Loan Amount
                  </label>
                  <div className="flex">
                    <span>£</span>
                    <span
                      id="amountInput"
                      className="text-white w-[44px] bg-transparent"
                    >
                      {loanAmount}
                    </span>
                  </div>
                </div>
              </div>

              <input
                onChange={(e) => setLoanAmount(e.target.value)}
                type="range"
                name="rangeInput"
                className="range rounded-lg bg-primary h-[10px] w-full"
                min={`${
                  loanType === "Personal Loan up to £7,500"
                    ? "1000"
                    : loanType === "Personal Loan £7,500 to £15,000"
                    ? "7500"
                    : loanType === "Personal Loan £15,000 to £25,000"
                    ? "15000"
                    : loanType === "Secured / Share Secured Personal Loan up to £100,000"
                    ? "1000"
                    : loanType === "Share-Secure Loan up to £50,000"
                    ? "1000"
                    : "1000"
                }`}
                max={`${
                  loanType === "Personal Loan up to £7,500"
                    ? "7500"
                    : loanType === "Personal Loan £7,500 to £15,000"
                    ? "15000"
                    : loanType === "Personal Loan £15,000 to £25,000"
                    ? "25000"
                    : loanType === "Secured / Share Secured Personal Loan up to £100,000"
                    ? "100000"
                    : loanType === "Share-Secure Loan up to £50,000"
                    ? "50000"
                    : "100000"
                }`}
                step="100"
                value={loanAmount}
              />

              <div className="flex flex-col gap-y-6">
                <div className="flex justify-between w-full">
                  <label
                    htmlFor="loanTerm"
                    className="text-1xs opacity-50 font-acumin font-light"
                  >
                    Loan Term
                  </label>
                  <div className="flex">
                    <span
                      id="termInput"
                      className="text-white w-[28px] bg-transparent"
                    >
                      {loanTerm}
                    </span>
                    <span> months </span>
                    <span
                      id="termInput"
                      className="text-white w-[38px] bg-transparent"
                    >
                      ({loanTermYears.toFixed(1)}
                    </span>
                    <span> years)</span>
                  </div>
                </div>
              </div>

              <input
                onChange={(e) => setLoanTerm(e.target.value)}
                type="range"
                name="termInput"
                className="range rounded-lg bg-primary h-[10px] w-full"
                min="2"
                max={`${
                  loanType === "Personal Loan up to £7,500"
                    ? "60"
                    : loanType === "Personal Loan £7,500 to £15,000"
                    ? "120"
                    : loanType === "Personal Loan £15,000 to £25,000"
                    ? "120"
                    : loanType === "Secured / Share Secured Personal Loan up to £100,000"
                    ? "300"
                    : loanType === "Share-Secure Loan up to £50,000"
                    ? "300"
                    : "300"
                }`}
                step="1"
                value={loanTerm}
              />

              <div className="flex flex-col md:flex-row justify-between w-full text-center   border-b-2 border-opacity-10">
                <div className="w-full md:w-1/4 py-6 md:py-28 flex flex-col">
                  <p className="opacity-30 text-mobileNav">Total you'll pay</p>
                  <p className="text-footerNav">£1,071.82</p>
                </div>

                <div className="flex-1 order-first md:order-none paymentSchedule">
                  <div className="">
                    <ul className="flex justify-around md:justify-between gap-x-4">
                      <li
                        className={`pb-[5px] ${
                          schedule !== "monthly"
                            ? "opacity-30"
                            : "border-b-[3px]"
                        }`}
                      >
                        <button
                          className="cursor-pointer"
                          onClick={(e) => updateSchedule(e, "monthly")}
                        >
                          Monthly
                        </button>
                      </li>
                      <li
                        className={`pb-[5px] ${
                          schedule !== "fortnightly"
                            ? "opacity-30"
                            : "border-b-[3px]"
                        }`}
                      >
                        <button
                          className="cursor-pointer"
                          onClick={(e) => updateSchedule(e, "fortnightly")}
                        >
                          Fortnightly
                        </button>
                      </li>
                      <li
                        className={`pb-[5px] ${
                          schedule !== "weekly"
                            ? "opacity-30"
                            : "border-b-[3px]"
                        }`}
                      >
                        <button
                          className="cursor-pointer"
                          onClick={(e) => updateSchedule(e, "weekly")}
                        >
                          Weekly
                        </button>
                      </li>
                    </ul>

                    <div className="w-full flex justify-center items-center mt-6">
                      {schedule === "monthly" ? (
                        <div className="w-[200px] h-[200px] bg-lightBlue rounded-full flex flex-col items-center justify-center ">
                          <p className="opacity-30 text-mobileNav">
                            Monthly Repairments
                          </p>
                          <p className="text-3xl">
                            £{(repayable / loanTerm).toFixed(2)}
                          </p>
                        </div>
                      ) : null}

                      {schedule === "fortnightly" ? (
                        <div className="w-[200px] h-[200px] bg-lightBlue rounded-full flex flex-col items-center justify-center ">
                          <p className="opacity-30 text-mobileNav">
                            Fortnightly Repairments
                          </p>
                          <p className="text-3xl">
                            £{(repayable / (loanTerm * 2)).toFixed(2)}
                          </p>
                        </div>
                      ) : null}

                      {schedule === "weekly" ? (
                        <div className="w-[200px] h-[200px] bg-lightBlue rounded-full flex flex-col items-center justify-center ">
                          <p className="opacity-30 text-mobileNav">
                            Weekly Repairments
                          </p>
                          <p className="text-3xl">
                            £{(repayable / (loanTerm * 4)).toFixed(2)}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/4 py-6 md:py-28 flex flex-col">
                  <p className="opacity-30 text-mobileNav">Interest</p>
                  <p className="text-footerNav">£71.82</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-1xs">6.05% APR (£100 - £25,000)</p>
                <div className="flex justify-start overflow-hidden">
                  <a
                    href="{{ button_link }}"
                    className="rounded-full bg-secondary min-w-max py-[16px] px-[24px] text-smallTitle leading-squat text-white flex items-center group"
                  >
                    <svg
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      className="transform -rotate-90 -translate-x-20 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 5.5L8 1.5L7 0.5L4 3.5L1 0.5L0 1.5L4 5.5Z"
                        fill="white"
                      />
                    </svg>
                    <button className="uppercase transform group-hover:translate-x-2 transition">
                      Apply Now
                    </button>
                    <svg
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      className="transform -rotate-90 ml-2 translate-x-0 group-hover:translate-x-20 transition"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 5.5L8 1.5L7 0.5L4 3.5L1 0.5L0 1.5L4 5.5Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>

        <p className="mt-6 opacity-30 text-center px-4">
          *for amounts over £25,000, please contact the credit union directly
        </p>
      </div>
    </section>
  );
}
