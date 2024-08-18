import React from 'react'

const Footer = () => {
    return (
        <div className="mt-20 text-primary">
            <div className="border-t border-neutral-100/20 p-10">
                <div className="text-center">
                    <h4 className="text-base font-medium">© 2024 BookAI. All rights reserved.</h4>
                </div>
                <div className="mt-4 flex text-secondary text-sm justify-center items-center gap-4">
                    <div>
                        <a href="#">Terms of service</a>
                    </div>
                    <div>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer