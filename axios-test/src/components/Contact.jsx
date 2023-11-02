"use client";

import { useContactState } from "stores";

const Contact = ({ goNext, goPrev }) => {
  const { contact, setContact } = useContactState();

  return (
    <div className="flex flex-col	items-center relative">
      <input
        className="ease-in-out duration-200 focus:border-b border-blue-600 w-custom h-20 bg-neutral-900 text-4xl outline-none mt-24 "
        value={contact}
        placeholder="전화번호를 입력해주세요."
        onChange={(e) => setContact(e.target.value)}
        maxLength={15}
      />
      <div className="absolute bottom-2 flex w-custom justify-between	">
        <button
          className="ease-in-out duration-200	hover:bg-blue-600 mb-12 bg-blue-500 w-60 rounded-xl h-14 text-xl "
          onClick={goPrev}
        >
          이전
        </button>
        <button
          className="ease-in-out duration-200	hover:bg-blue-600 mb-12 bg-blue-500 w-60 rounded-xl h-14 text-xl "
          onClick={goNext}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Contact;
