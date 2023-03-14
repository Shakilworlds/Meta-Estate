import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
          <label class="block">
            <span class="font-Inter font-medium text-base text-black">
              Full Name
            </span>
            <input
              type="text"
              class="
                    mt-2
                    block
                    w-full
                    rounded-[4px]
                    border-peragraph/20
                    focus:border-primary focus:ring focus:ring-primary/5 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="font-Inter font-medium text-base text-black">
              Phone Number
            </span>
            <input
              type="text"
              class="
                    mt-2
                    block
                    w-full
                    rounded-[4px]
                    border-peragraph/20
                    focus:border-primary focus:ring focus:ring-primary/5 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="font-Inter font-medium text-base text-black">
              Email Address
            </span>
            <input
              type="Email"
              class="
                    mt-2
                    block
                    w-full
                    required
                    rounded-[4px]
                    border-peragraph/20
                    focus:border-primary focus:ring focus:ring-primary/5 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="font-Inter font-medium text-base text-black">
              Subject
            </span>
            <input
              type="text"
              class="
                    mt-2
                    block
                    w-full
                    rounded-[4px]
                    border-peragraph/20
                    focus:border-primary focus:ring focus:ring-primary/5 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
        </div>
        <div className="pt-6">
        <label class="block">
                <span class="font-Inter font-medium text-base text-black">Message</span>
                <textarea
                  class="
                    mt-1
                    block
                    w-full
                    h-[168px]
                    rounded-md
                    border-peragraph/20
                    focus:border-primary focus:ring focus:ring-primary/5 focus:ring-opacity-50
                  "
                  rows="3"
                ></textarea>
              </label>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
