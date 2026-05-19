"use client";

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-40 h-40"
            >
                <source src="/loading.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default Loading;