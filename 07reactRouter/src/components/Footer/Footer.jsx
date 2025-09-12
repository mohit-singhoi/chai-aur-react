import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                // src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                //src="Logo.png"
                                src="https://scontent.fdel1-6.fna.fbcdn.net/v/t39.30808-1/524962588_122107893236947561_4992895220689930382_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=BNo8E2MwUuYQ7kNvwFNlGw3&_nc_oc=Adn282jp_N9VIRznRuibAcqNczhJFAVyDnZBwRzqyR6G0ZHD54efmEyucB9bR2WshRc&_nc_zt=24&_nc_ht=scontent.fdel1-6.fna&_nc_gid=oHKFaxvOe8R9hCncZFxd3A&oh=00_AfZTqKj6PdLo_687YAs2cGTq4s2iOcxzt8BwlxqkdIUrYw&oe=68C7822E"
                                className="mr-3 h-25 rounded-xl "
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://www.facebook.com/share/1AXX5hdvUR/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/apni.kalam379?igsh=MXZsNzRpdHE5NDA2bg==" className="hover:underline">
                                        Instagram
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="https://lawblend.com/articles/privacy-policy-requirements-for-indian/" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-5 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2025
                        <a href="https://gravatar.com/inspiringsoftlyfcde7dc9b8" className="hover:underline">
                            MohitKumar
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex  mt-5 space-x-6 sm:justify-center sm:mt-0">
                        <Link to="https://www.facebook.com/profile.php?id=61578426855515" className="text-gray-500 hover:text-gray-900 ">
                            <svg
                                className="w-4 h-4 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />

                            </svg>

                            <span className="sr-only">Facebook page</span>
                        </Link>

                        <Link to="https://www.instagram.com/apni.kalam379?igsh=MXZsNzRpdHE5NDA2bg==" className="text-gray-500">

                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 
                                        1.97.24 2.427.403a4.9 4.9 0 0 1 1.75 1.145 
                                        4.9 4.9 0 0 1 1.145 1.75c.163.457.347 1.257.403 
                                        2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 
                                        4.85c-.056 1.17-.24 1.97-.403 2.427a4.9 4.9 0 0 1-1.145 
                                        1.75 4.9 4.9 0 0 1-1.75 1.145c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.9 4.9 0 0 1-1.75-1.145 4.9 4.9 0 0 1-1.145-1.75c-.163-.457-.347-1.257-.403-2.427C2.175 
                                        15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.9 4.9 0 0 1 1.145-1.75 
                                        4.9 4.9 0 0 1 1.75-1.145c.457-.163 1.257-.347 
                                        2.427-.403C8.416 2.175 8.796 2.163 12 
                                        2.163zm0 3.675a6.162 6.162 0 1 0 0 12.324 
                                        6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 
                                        3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 
                                        0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 
                                        2.881 1.44 1.44 0 0 0 0-2.881z"/>
                            </svg>

                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link to="https://www.linkedin.com/in/mohit-kumar-0310a1257" className="text-gray-500">

                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11.75 20.25h-3v-11h3v11zm-1.5-12.625c-.966 0-1.75-.787-1.75-1.75s.784-1.75 1.75-1.75c.965 0 1.75.787 1.75 1.75s-.785 1.75-1.75 1.75zm14.25 12.625h-3v-5.604c0-1.337-.025-3.062-1.875-3.062-1.878 0-2.166 1.464-2.166 2.974v5.692h-3v-11h2.878v1.507h.042c.4-.757 1.378-1.555 2.837-1.555 3.037 0 3.584 2 3.584 4.604v6.444z" />
                            </svg>

                            <span className="sr-only">Linkedin</span>
                        </Link>
                        <Link to="https://x.com/Mohitsinghoi" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d=" M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="https://github.com/mohit-singhoi" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="https://www.hackerrank.com/profile/mohitsinghoi501" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16 0c1.714 0 13 6.516 13.854 8 .859 1.484 .859 14.516 0 16s-12.141 8-13.854 8c-1.714 0-13-6.516-13.859-8-.854-1.484-.854-14.516 0-16 .859-1.484 12.146-8 13.859-8zm3.063 9.068c-.193 0-.349 .151-.349 .344v5.167h-5.427v-5.37h.932c.188 0 .339-.151 .339-.344 0-.125-.068-.234-.161-.292l-2.099-2.010c-.063-.089-.188-.146-.302-.146-.109 0-.214 .057-.276 .141l-2.24 2.016c-.094 .063-.161 .167-.161 .292 0 .188.151 .344.344 .344h.938l.010 13.38c0 .193 .146 .344 .339 .344h1.99c.188 0 .344-.151 .344-.344v-5.339h5.432v5.536h-.932c-.193 0-.344 .156-.344 .344 0 .125.068 .234.161 .292l2.104 2.016c.057 .083 .188 .146 .302 .146s.208-.063 .276-.146l2.24-2.016c.094-.057 .161-.167 .161-.292 0-.188-.156-.344-.344-.344h-.938l-.010-13.375c0-.198-.151-.349-.339-.349h-1.99z"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
