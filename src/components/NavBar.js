import '../styles/navBar.css'
const NavBar = () => {
    return (
        <nav class="bg-gray-800">
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4">
                    <a href="https://youtu.be/p7YXXieghto" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
                    <a href="https://youtu.be/p7YXXieghto" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                    <a href="https://youtu.be/p7YXXieghto" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                    <a href="https://youtu.be/p7YXXieghto" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                </div>
                </div>
            </div>
        </nav>
    );

    }

    export default NavBar;
