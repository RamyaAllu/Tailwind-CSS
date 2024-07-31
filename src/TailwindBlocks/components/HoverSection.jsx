import React from 'react'

const HoverSection = () => {
  return (
    <section>
    <section className="text-gray-600 body-font bg-BgColor text-TextColor">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-TextColor">Healthy Foods and Snacks</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Explore a variety of delicious and nutritious options that promote a healthier lifestyle. From snacks to meals, our selection is designed to nourish your body and delight your taste buds.</p>
            </div>
            <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                        <img alt="healthy food" className="absolute inset-0 w-full h-full object-cover object-center" src="assets/g1.jpg" />
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">FRUITS</h2>
                            <h1 className="title-font text-lg font-medium text-TextColor mb-3">Fresh Berries</h1>
                            <p className="leading-relaxed">A delightful mix of strawberries, blueberries, and raspberries, packed with antioxidants and vitamins.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                        <img alt="healthy food" className="absolute inset-0 w-full h-full object-cover object-center" src="assets/g2.jpg" />
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">VEGETABLES</h2>
                            <h1 className="title-font text-lg font-medium text-TextColor mb-3">Grilled Veggie Platter</h1>
                            <p className="leading-relaxed">A colorful assortment of grilled vegetables, perfect for a light and healthy snack or side dish.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                        <img alt="healthy food" className="absolute inset-0 w-full h-full object-cover object-center" src="assets/g3.jpg" />
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">SNACKS</h2>
                            <h1 className="title-font text-lg font-medium text-TextColor mb-3">Mixed Nuts</h1>
                            <p className="leading-relaxed">A nutritious blend of almonds, walnuts, and cashews, providing healthy fats and protein.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                        <img alt="healthy food" className="absolute inset-0 w-full h-full object-cover object-center" src="assets/h1.jpg" />
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">DIPS</h2>
                            <h1 className="title-font text-lg font-medium text-TextColor mb-3">Hummus with Veggies</h1>
                            <p className="leading-relaxed">Creamy hummus served with fresh cucumber, carrot, and bell pepper sticks for dipping.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                        <img alt="healthy food" className="absolute inset-0 w-full h-full object-cover object-center" src="assets/h2.jpg" />
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">SMOOTHIES</h2>
                            <h1 className="title-font text-lg font-medium text-TextColor mb-3">Green Smoothie</h1>
                            <p className="leading-relaxed">A refreshing blend of spinach, kale, banana, and almond milk for a nutrient-packed drink.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                        <img alt="healthy food" className="absolute inset-0 w-full h-full object-cover object-center" src="assets/g6.jpg" />
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">SALADS</h2>
                            <h1 className="title-font text-lg font-medium text-TextColor mb-3">Quinoa Salad</h1>
                            <p className="leading-relaxed">A hearty salad with quinoa, cherry tomatoes, cucumbers, and a lemon vinaigrette.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>

  )
}

export default HoverSection