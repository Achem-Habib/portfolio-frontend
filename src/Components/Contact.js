import ContactIcon from "./assets/icons/ContactIcon";
import Input from "./Input";

export default function Contact() {
  return (
    <section>
      <div className=" dark:bg-gray-800  py-8">
        <div className="flex flex-col mx-4 py-4">
          <h1 className=" flex flex-col gap-y-2 mx-auto">
            <span className="mx-auto">
              <ContactIcon />
            </span>
            <span className="text-4xl font-bold pb-2 text-fuchsia-700 dark:text-blue-200">
              Get In Touch
            </span>
          </h1>
          <div className="mt-8 flex flex-col md:flex-row-reverse gap-x-8 gap-y-8 justify-evenly">
            <form className="flex flex-col gap-y-4 w-full max-w-md">
              <p className="font-medium text-slate-800">
                If you are interested to work with me, send me a message using
                this form
              </p>
              <Input
                id="name"
                text="Name"
                type="text"
                placeholder="Your Name"
              />
              <Input
                id="email"
                text="E-mail"
                type="email"
                placeholder="Your E-mail"
              />
              <Input
                id="subject"
                text="Subject"
                type="text"
                placeholder="Subject"
              />
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="7"
                  cols="20"
                  placeholder="Say something..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>
              <button className="relative w-32 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative w-32 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Submit
                </span>
              </button>
            </form>
            <div>
              <iframe
                className="w-full h-[400px]"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.435552381403!2d91.82972451432126!3d24.917228049118027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750556002144eab%3A0xe277e14dbca9f2ab!2sShahjalal%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbd!4v1670249542715!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
