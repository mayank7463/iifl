import React from 'react'

const Footer = () => {
  return (
    

<footer class=" bg-[#68534c] mt-10 mb-0 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between text-white">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="./Navbar/iifl_logo.svg" class="h-17" alt="Flowbite Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-xl font-medium gap-4 sm:mb-0 ">
                <li>
                    <a target='_blank' href="https://www.iifl.com/finance/about-us" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.iifl.com/finance/privacy-policy" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.iifl.com/finance/terms-and-condition" class="hover:underline me-4 md:me-6">Terms And Conditions</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.iifl.com/finance/disclaimer" class="hover:underline">Disclaimer</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.iifl.com/sitemap" class="hover:underline">Sitemap</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block  text-white sm:text-center ">Copyright ©<a href="https://flowbite.com/" class="hover:underline"></a>.2024 IIFL Finance Limited. All rights Reserved.
        </span>
    </div>
</footer>


  )
}

export default Footer
