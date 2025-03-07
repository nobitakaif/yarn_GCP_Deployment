
export default function Signup(){
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-72 h-72 bg-gray-500">
            <h2 className="text-4xl relative left-[30%]">Signup</h2>
                <input type="text" className="h-6 border" placeholder="enter your username"/>
                <input type="text" className="h-6 border" placeholder="enter your password" />
                <button className="bg-amber-900 rounded-md">Signup</button>
            </div>

        </div>
    )
}