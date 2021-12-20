import { useState, useEffect, useRef } from "react";
// import "../public/js/calcInputRange";

function setInputStyle(input) {
    requestAnimationFrame(() => {
      var valPercent = (input.valueAsNumber - parseInt(input.min)) /
      (parseInt(input.max) - parseInt(input.min));
      var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(' + valPercent + ', #F77806), color-stop(' + valPercent + ', #123757));';
      input.style = style;
    })
}

export default function Home() {
  const [loanType, setLoanType] = useState("Personal Loan up to £7,500");
  const [loanAmount, setLoanAmount] = useState(2000);
  const [loanTerm, setLoanTerm] = useState(11);
  const [schedule, setSchedule] = useState("monthly");


  const loanAmountInputRef = useRef();
  const loanTermInputRef = useRef();


  useEffect(() => {

    if ( loanType === "Personal Loan up to £7,500") {
      setLoanAmount(2000);
      setLoanTerm(11);
    }
    if ( loanType === "Personal Loan £7,500 to £15,000") {
      setLoanAmount(8600);
      setLoanTerm(18);
    }

    if ( loanType === "Personal Loan £15,000 to £25,000") {
      setLoanAmount(16500);
      setLoanTerm(18);
    }

    if ( loanType === "Secured / Share Secured Personal Loan up to £100,000") {
      setLoanAmount(16500);
      setLoanTerm(50);
    }

    if ( loanType === "Share-Secure Loan up to £50,000") {
      setLoanAmount(8600);
      setLoanTerm(46);
    }
    
  }, [loanType, setLoanAmount, setLoanTerm])



  useEffect(() => {
    const input = loanAmountInputRef.current;
      setInputStyle(input);
  }, [loanAmount])


  useEffect(() => {
    const input = loanTermInputRef.current;
      setInputStyle(input);
  }, [loanTerm])



  const loanTermYears = loanTerm / 12;
  const loanTermWeeks = loanTerm * 4.3333;


  const personalLoanUpTo7500InterestAmount = 12
  const personalLoanUpTo7500Interest = loanAmount * loanTermYears * (parseFloat(personalLoanUpTo7500InterestAmount) / 100);
  const personalLoanUpTo7500Total = parseFloat(loanAmount) + parseFloat(personalLoanUpTo7500Interest.toFixed(2));

  const personalLoanUpTo15000InterestAmount = 8.9
  const personalLoanUpTo15000Interest = loanAmount * loanTermYears * (parseFloat(personalLoanUpTo15000InterestAmount) / 100);
  const personalLoanUpTo15000Total = parseFloat(loanAmount) + parseFloat(personalLoanUpTo15000Interest.toFixed(2));
  
  const personalLoanUpTo25000InterestAmount = 7.9
  const personalLoanUpTo25000Interest = loanAmount * loanTermYears * (parseFloat(personalLoanUpTo25000InterestAmount) / 100);
  const personalLoanUpTo25000Total = parseFloat(loanAmount) + parseFloat(personalLoanUpTo25000Interest.toFixed(2));
  
  const personalLoanUpTo100000InterestAmount = 4.9
  const personalLoanUpTo100000Interest = loanAmount * loanTermYears * (parseFloat(personalLoanUpTo100000InterestAmount) / 100);
  const personalLoanUpTo100000Total = parseFloat(loanAmount) + parseFloat(personalLoanUpTo100000Interest.toFixed(2));
  
  const personalLoanUpTo50000InterestAmount = 4.9
  const personalLoanUpTo50000Interest = loanAmount * loanTermYears * (parseFloat(personalLoanUpTo50000InterestAmount) / 100);
  const personalLoanUpTo50000Total = parseFloat(loanAmount) + parseFloat(personalLoanUpTo50000Interest.toFixed(2));


  function updateSchedule(e, scheduleValue) {
    e.preventDefault();
    setSchedule(scheduleValue);
  }

  function getLoanTermMax() {
    if ( loanType === "Personal Loan up to £7,500") {
      return 60;
    }
    if ( loanType === "Personal Loan £7,500 to £15,000") {
      return 120;
    }

    if ( loanType === "Personal Loan £15,000 to £25,000") {
      return 120;
    }

    if ( loanType === "Secured / Share Secured Personal Loan up to £100,000") {
      return 300;
    }

    if ( loanType === "Share-Secure Loan up to £50,000") {
      return 300;
    }
  }


  function getLoanAmountMin() {
    switch (loanType) {
      case 'Personal Loan up to £7,500':
        return 1000;
      case 'Personal Loan £7,500 to £15,000':
        return 7500;
      case 'Personal Loan £15,000 to £25,000':
        return 15000;
      case 'Secured / Share Secured Personal Loan up to £100,000':
      case 'Share-Secure Loan up to £50,000':
        return 1000;

      default:
        return 1000;
    }
  }


  function getMonthlyAmount() {
    switch (loanType) {
      case 'Personal Loan up to £7,500':
        return `£${(personalLoanUpTo7500Total / loanTerm).toFixed(2)}`;
      case 'Personal Loan £7,500 to £15,000':
        return `£${(personalLoanUpTo15000Total / loanTerm).toFixed(2)}`;
      case 'Personal Loan £15,000 to £25,000':
        return `£${(personalLoanUpTo25000Total / loanTerm).toFixed(2)}`;
      case 'Secured / Share Secured Personal Loan up to £100,000':
        return `£${(personalLoanUpTo100000Total / loanTerm).toFixed(2)}`
      case 'Share-Secure Loan up to £50,000':
        `£${(personalLoanUpTo50000Total / loanTerm).toFixed(2)}`

    }
  }


  function getLoanAmountMax() {
    if ( loanType === "Personal Loan up to £7,500") {
      return 7500;
    }
    if ( loanType === "Personal Loan £7,500 to £15,000") {
      return 15000;
    }

    if ( loanType === "Personal Loan £15,000 to £25,000") {
      return 25000;
    }

    if ( loanType === "Secured / Share Secured Personal Loan up to £100,000") {
      return 100000;
    }

    if ( loanType === "Share-Secure Loan up to £50,000") {
      return 50000;
    }
  }

  return (
    <section>

      <div className="w-full lg:w-7/12 max-w-[754px] text-white">
        <div className="w-screen md:w-auto p-14 bg-darkestBlue md:rounded-2xl">
          <form action="" className="flex flex-col gap-y-10">
            <div className="w-full bg-primary rounded-full pr-4">
              
              {/*SELECT LOAN TYPE - redo with better value names*/} 
              <select
                value={loanType}
                onChange={(e) => {
                  setLoanType(e.target.value);
                }}
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

              {/*SELECT LOAN AMOUNT LABEL*/}
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

              {/*SELECT LOAN AMOUNT RANGE*/}
              <input
                ref={loanAmountInputRef}
                onChange={(e) => setLoanAmount(e.target.value)}
                type="range"
                name="rangeInput"
                className="range rounded-lg bg-primary h-[10px] w-full"
                min={`${ getLoanAmountMin() }`}
                max={`${ getLoanAmountMax() }`}
                step="100"
                value={loanAmount}
              />

              {/*SELECT LOAN TERM LABLE*/}
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

              {/*SELECT LOAN TERM RANGE*/}
              <input
                ref={loanTermInputRef}
                onChange={(e) => setLoanTerm(e.target.value)}
                type="range"
                name="termInput"
                className="range rounded-lg bg-primary h-[10px] w-full"
                min="2"
                max={`${ getLoanTermMax() }`}
                step="1"
                value={loanTerm}
              />

              <div className={`flex flex-col md:flex-row justify-between w-full text-center  border-b-2 border-opacity-10
              ${loanType === "Select Loan Type" ? "pb-[28px]" : "pb-0" }`}>
                
                {/*TOTAL YOU'LL PAY*/}
                <div className="w-full md:w-1/4 py-6 md:py-28 flex flex-col">
                  <p className="opacity-30 text-mobileNav">Total you'll pay</p>
                  <p className="text-footerNav">
                    {` ${
                      loanType === "Personal Loan up to £7,500"
                        ? `£${(personalLoanUpTo7500Total).toFixed(2)}`
                        : loanType === "Personal Loan £7,500 to £15,000"
                        ? `£${(personalLoanUpTo15000Total.toFixed(2))}`
                        : loanType === "Personal Loan £15,000 to £25,000"
                        ? `£${(personalLoanUpTo25000Total.toFixed(2))}`
                        : loanType === "Secured / Share Secured Personal Loan up to £100,000"
                        ? `£${(personalLoanUpTo100000Total.toFixed(2))}`
                        : loanType === "Share-Secure Loan up to £50,000"
                        ? `£${(personalLoanUpTo50000Total.toFixed(2))}`
                        : ""
                    }`}
                  </p>
                </div>

                {/*AMOUNT PAYABLE*/}
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

                      {/*MONTHLY*/} 
                      {schedule === "monthly" ? (
                        <div className="w-[205px] h-[205px] bg-lightBlue rounded-full flex flex-col items-center justify-center ">
                          <p className="opacity-30 text-mobileNav">
                            Monthly Repairments
                          </p>
                          <p className="text-3xl">
                          { getMonthlyAmount() }
                          </p>
                        </div>
                      ) : null}

                      {/*FORTNIGHTLY*/} 
                      {schedule === "fortnightly" ? (
                        <div className="w-[205px] h-[205px] bg-lightBlue rounded-full flex flex-col items-center justify-center ">
                          <p className="opacity-30 text-mobileNav">
                            Fortnightly Repairments
                          </p>
                          <p className="text-3xl">
                          {` ${
                              loanType === "Personal Loan up to £7,500"
                                ? `£${((personalLoanUpTo7500Total / loanTermWeeks) * 2).toFixed(2)}`
                                : loanType === "Personal Loan £7,500 to £15,000"
                                ? `£${((personalLoanUpTo15000Total / loanTermWeeks) * 2).toFixed(2)}`
                                : loanType === "Personal Loan £15,000 to £25,000"
                                ? `£${((personalLoanUpTo25000Total / loanTermWeeks) * 2).toFixed(2)}`
                                : loanType === "Secured / Share Secured Personal Loan up to £100,000"
                                ? `£${((personalLoanUpTo100000Total / loanTermWeeks) * 2).toFixed(2)}`
                                : loanType === "Share-Secure Loan up to £50,000"
                                ? `£${((personalLoanUpTo50000Total / loanTermWeeks) * 2).toFixed(2)}`
                                : ""
                            }`}
                          </p>
                        </div>
                      ) : null}

                      {/*WEEKLY*/} 
                      {schedule === "weekly" ? (
                        <div className="w-[205px] h-[205px] bg-lightBlue rounded-full flex flex-col items-center justify-center ">
                          <p className="opacity-30 text-mobileNav">
                            Weekly Repairments
                          </p>
                          <p className="text-3xl">
                          {` ${
                              loanType === "Personal Loan up to £7,500"
                                ? `£${(personalLoanUpTo7500Total / loanTermWeeks).toFixed(2)}`
                                : loanType === "Personal Loan £7,500 to £15,000"
                                ? `£${(personalLoanUpTo15000Total / loanTermWeeks).toFixed(2)}`
                                : loanType === "Personal Loan £15,000 to £25,000"
                                ? `£${(personalLoanUpTo25000Total / loanTermWeeks).toFixed(2)}`
                                : loanType === "Secured / Share Secured Personal Loan up to £100,000"
                                ? `£${(personalLoanUpTo100000Total / loanTermWeeks).toFixed(2)}`
                                : loanType === "Share-Secure Loan up to £50,000"
                                ? `£${(personalLoanUpTo50000Total / loanTermWeeks).toFixed(2)}`
                                : ""
                            }`}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/*INTEREST*/}
                <div className="w-full md:w-1/4 py-6 md:py-28 flex flex-col">
                  <p className="opacity-30 text-mobileNav">Interest
                  {` ${
                      loanType === "Personal Loan up to £7,500"
                        ? `${(personalLoanUpTo7500InterestAmount).toFixed(2)}%`
                        : loanType === "Personal Loan £7,500 to £15,000"
                        ? `${(personalLoanUpTo15000InterestAmount.toFixed(2))}%`
                        : loanType === "Personal Loan £15,000 to £25,000"
                        ? `${(personalLoanUpTo25000InterestAmount.toFixed(2))}%`
                        : loanType === "Secured / Share Secured Personal Loan up to £100,000"
                        ? `${(personalLoanUpTo100000InterestAmount.toFixed(2))}%`
                        : loanType === "Share-Secure Loan up to £50,000"
                        ? `${(personalLoanUpTo50000InterestAmount.toFixed(2))}%`
                        : ""
                    }`}
                  </p>
                  <p className="text-footerNav">
                  {` ${
                      loanType === "Personal Loan up to £7,500"
                        ? `£${(personalLoanUpTo7500Interest).toFixed(2)}`
                        : loanType === "Personal Loan £7,500 to £15,000"
                        ? `£${(personalLoanUpTo15000Interest.toFixed(2))}`
                        : loanType === "Personal Loan £15,000 to £25,000"
                        ? `£${(personalLoanUpTo25000Interest.toFixed(2))}`
                        : loanType === "Secured / Share Secured Personal Loan up to £100,000"
                        ? `£${(personalLoanUpTo100000Interest.toFixed(2))}`
                        : loanType === "Share-Secure Loan up to £50,000"
                        ? `£${(personalLoanUpTo50000Interest.toFixed(2))}`
                        : ""
                    }`}
                  </p>
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

                    {/*APPLY NOW BUTTON*/}
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
