import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <div className="p-4 page-bg">
      <p className="p-2 m-2 rounded-r-full bg-slate-500 w-fit text-slate-200">
        <NavLink to="/">Go Back to Dictionary!</NavLink>
      </p>
      <img src="/images/horizontal_rule.png" className="h-10" />
      <header>
        <h2 className="w-1/3 text-4xl font-bold text-purple-400 text-end">
          Get in Touch
        </h2>
        <img src="/images/contact.png" className="w-2/3" />
      </header>

      <img src="/images/horizontal_rule.png" className="h-10" />

      <div className="p-4 text-xl font-semibold rounded-lg bg-slate-300 text-slate-500">
        <div className="w-1/2">
          <img src="/images/envelope.png" />
        </div>
        <div>
          <p>
            <span className="sky-text-strong">Email: </span>{" "}
            home.branko@gmail.com
          </p>
          <p>
            <span className="sky-text-strong">Phone: </span>
            +381 2522 788
          </p>
          <p>
            <span className="sky-text-strong">Address: </span>
            Stevana Hristica 31, Novi Sad, Serbia
          </p>
        </div>
      </div>
    </div>
  );
}
