import React from "react";

const AuthCard = () => {
  return (
    <div className="bg-white p-8 rounded-md h-full flex flex-col gap-5 shadow-lg border border-blue-100">
      <h2 className="text-[30px] font-bold mb-2 text-blue-700 leading-tight">
        Hệ thống <br /> Quản lý Đóng Tàu
      </h2>
      <p className="text-gray-700 text-lg mb-6">
        Chào mừng bạn đến với hệ thống quản lý đóng tàu. Chúng tôi cung cấp giải
        pháp hiện đại, minh bạch và hiệu quả cho mọi quy trình đóng mới, bảo trì
        và quản lý tàu biển.
      </p>
      <div className="bg-blue-700 text-white p-4 rounded-[20px] flex flex-col gap-2 shadow">
        <p className="text-sm mb-2">
          Đội ngũ kỹ sư và quản lý giàu kinh nghiệm, tận tâm với từng dự án.
        </p>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-xl shadow-inner">
            T
          </div>
          <div>
            <p className="font-semibold text-lg">Trần Hải Đăng</p>
            <p className="text-sm text-blue-100">Kỹ sư trưởng đóng tàu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
