<template>
    <div class=" h-20 flex flex-row  justify-between border-b px-36 lt-sm:p-0 items-center  lt-sm:justify-around ">
        <div class="justify-start">
            <img class="py-4" src="../public/image/chuyentien.jpg" alt="">
        </div>
        <ul class="block leading-[5rem] lt-sm:hidden ">
            <li class="inline-block px-2 text-lg relative cursor-pointer">
                Trang chủ
                <div class="border-home"></div>
            </li>
            <li class="inline-block px-2 text-lg cursor-pointer">Gửi tiền</li>
            <li class="inline-block px-2 text-lg cursor-pointer">Về chúng tôi</li>
        </ul>
        <div class="flex items-center">
            <button class="border-2 rounded-[3rem] h-10 my-7 px-5 mx-2 font-semibold lt-sm:border-none lt-sm:text-yellow-500 lt-sm:mx-0">Đăng nhập</button>
            <img src="../public/image/menu.png" class="hidden lt-sm:block" alt="">
            <button class="border-2 rounded-[3rem] h-10 my-7 px-5 bg-slate-800 text-amber-500 font-semibold lt-sm:hidden">Đăng Ký</button>
            <img src="../public/image/coVN.jpg" class="inline-block mx-4 lt-sm:hidden " alt="">
            <img src="../public/image/chevron-down.png" class="inline-block lt-sm:hidden " alt="">
        </div>
    </div>

</template>

<style >
.line-height-24{
    line-height: 96px;
}
.border-home{
    width: 50%;
    height: 0.2em;
    background-color: #ffd530;
    position: absolute;
    bottom: 0;
    left: 25%;
}
</style>