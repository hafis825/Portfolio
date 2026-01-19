import React, { useEffect } from 'react';

const SkeletonLoader = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className="px-12 mt-24 mx-auto max-w-7xl grid gap-y-5 lg:grid-cols-[40%_60%] animate-pulse">
            {/* Left Section Skeleton */}
            <div className="pr-4">
                <div className="sticky top-24 grid gap-y-5 lg:grid-rows-[2fr_2fr_30%] lg:h-[80vh]">
                    {/* Header Skeleton */}
                    <div className="flex flex-col gap-2">
                        <div className="h-12 bg-gray-700 rounded w-3/4"></div>
                        <div className="h-6 bg-gray-700 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                    </div>

                    {/* Navbar Skeleton  */}
                    <div className="hidden lg:flex flex-col gap-5 tracking-widest">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="flex items-center gap-4">
                                <div className="h-1 w-12 bg-gray-700 rounded"></div>
                                <div className="h-6 w-24 bg-gray-700 rounded"></div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Skeleton */}
                    <div className="flex items-end gap-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="h-8 w-8 bg-gray-700 rounded-full"></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Section Skeleton */}
            <div className="grid gap-y-36">
                <div className="space-y-6">
                    <div className="h-20 bg-gray-700 rounded w-full"></div>
                    <div className="h-24 bg-gray-700 rounded w-full"></div>
                    <div className="h-24 bg-gray-700 rounded w-full"></div>
                </div>


                <div className="space-y-6">

                    {/* Content Blocks */}
                    {[1, 2].map((block) => (
                        <div key={block} className="grid grid-cols-[25%_75%] gap-4">
                            <div className="h-4 bg-gray-700 rounded w-full"></div>
                            <div className="space-y-2">
                                <div className="h-5 bg-gray-700 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-700 rounded w-full"></div>
                                <div className="h-4 bg-gray-700 rounded w-5/6"></div>

                                {/* Tags */}
                                <div className="flex gap-2 mt-4">
                                    {[1, 2, 3].map((tag) => (
                                        <div key={tag} className="h-6 w-16 bg-gray-700 rounded-full"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
