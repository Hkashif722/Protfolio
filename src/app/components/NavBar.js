
export default function NavBar() {

    return <div className="flex justify-between p-5">
        <div>LOGO</div>
        <ul className="flex justify-end space-x-10 mr-10">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contactus">Contact us</a></li>
        </ul>
    </div>
}