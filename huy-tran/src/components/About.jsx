const aboutItems = [
  {
    label: "Projects done",
    number: 5,
  },
  //   {
  //     label: "Years of experience",
  //     number: 0,
  //   },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hello! My name is Huy Tran, and I&apos;m a recent graduate from the
            University of Nevada, Reno. As an aspiring software dev seeking to
            improve my skills with some professional experience. I believe that
            understanding what the code does is vital to troubleshooting any
            potential problems instead of simply pasting working code without
            research. I&apos;m excited to take upon any opportunities provided
            to me, and will pour in the necessary efforts to learn and adapt to
            any new environments! Thank you for checking out my portfolio!
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-xl font-bold md:text-3xl">
                    {number}
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="images/black-hole-icon.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
