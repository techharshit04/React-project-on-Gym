import React, { useEffect, useState } from "react";

export default function HOC(Child) {
    function wrapperfunction() {
        let [loading, setLoading] = useState(true);
        useEffect(() => {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }, [])
        return (
            <>
                {
                    loading ?
                        <div className="w-full h-screen flex justify-center items-center"><span class="loader flex justify-center items-center"></span></div>
                        :
                        <><Child /> </>
                }
            </>
        )
    }
    return wrapperfunction
}
