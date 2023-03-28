import { createBrowserHistory } from "history"
import { useNavigate } from "react-router-dom"

const credencials = {
    name: 'Elieser',
    pass: 'pepito',
}



const LoginScreen = ()=> {

    const history = createBrowserHistory()
    history.push('/app')
    console.log(history)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const userName = e.target.querySelector('#userName')
        const pass = e.target.querySelector('#password')

        if (userName.value === credencials.name && pass.value === credencials.pass) {
           console.log({
            id: new Date().getUTCSeconds(),
            name: userName.value,
           })

           userName.value = ''
           pass.value = ''
           history.go('/app')
        }

    }

    return (
        <main className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 h-screen" >               
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <section className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your User Name
                                <input type="text" name="userName" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example Pepito07" required={true} />
                                </label>


                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}
                                />
                                </label>

                            <div className="flex items-center justify-between">
                                <section className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </section>
                                <a href="#" className="text-sm font-medium hover:underline dark:text-white">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 border-2 border-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-white">Sign up</a>
                            </p>
                        </form>
                    </section>
                </div>
        </main>
    )
}
export default LoginScreen