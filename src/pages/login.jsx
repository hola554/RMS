// import loginImg from "../assets/bg.jpg"

// export const LoginPage = () => {
//     return (
//         <div
//             style={{
//                 backgroundImage: "../assets/bg.jpg",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundAttachment: "fixed"
//             }}
//             className="min-h-screen flex items-center justify-center p-4">
//             {/* <!-- Logo --> */}
//             {/* <img src={loginImg} /> */}
//             <div class="w-full max-w-md login-container rounded-xl shadow-xl overflow-hidden p-8">
//                 {/* <!-- Login Header --> */}
//                 <div class="text-center mb-8">
//                     <h1 class="text-3xl font-bold text-gray-800  text-left">Login</h1>
//                 </div>

//                 {/* <!-- Login Form --> */}
//                 <form class="space-y-6">
//                     {/* <!-- Username Field --> */}
//                     <div>
//                         <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                         <input
//                             type="text"
//                             id="username"
//                             class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                             placeholder="John1234"

//                             required
//                         />
//                     </div>

//                     {/* <!-- Password Field --> */}
//                     <div>
//                         <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                             placeholder="••••••••"

//                             required
//                         />
//                     </div>

//                     {/* <!-- Login Button --> */}
//                     <button
//                         type="submit"
//                         class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                     >
//                         Log in
//                     </button>

//                     {/* <!-- Additional Options --> */}
//                     <div class="text-center mt-4">
//                         <a href="#" class="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }


export const LoginPage = () => {
    return (
        <main className="w-screen min-h-screen relative overflow-hidden">
            <img className="w-full h-screen" src="/bg.jpg" alt="" />
            {/*  */}
            <section className="absolute top-[30%] left-[10%] mx-5 w-full h-[450px] md:w-[600px] md:top-[30%] md:left-[20%] lg:left-[40%]">
                <form class=" bg-white w-[70%] h-full flex flex-col justify-center rounded-3xl p-10 space-y-6">
                    {/* <!-- Username Field --> */}
                    <div>
                        <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="username"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* <!-- Password Field --> */}
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="••••••••"

                            required
                        />
                    </div>

                    {/* <!-- Login Button --> */}
                    <button
                        type="submit"
                        class="w-full bg-blue-600 transition-all duration-200 ease-in hover:bg-white hover:text-blue-600 hover:border-[2px] hover:font-[600] hover:border-solid hover:border-blue-600  text-white font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Log in
                    </button>

                    {/* <!-- Additional Options --> */}
                    <div class="text-center mt-4">
                        <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                </form>
            </section>
        </main>
    )
}
