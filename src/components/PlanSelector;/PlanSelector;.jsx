import React, { useState } from "react";
import AddCardModal from "../modal/AddCardModal";

const plans = [
    { name: "Regular", price: "$99.99", period: "/mo", description: "Price for 1-50 unit" },
    { name: "Platinum", price: "$129.99", period: "/mo", description: "Price for 1-50 unit" },
    { name: "Enterprize", price: "$199.99", period: "/mo", description: "Price for 1-50 unit" },
];

const PlanSelector = () => {
    const [selected, setSelected] = useState(0);
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [cardForm, setCardForm] = useState({
        name: '',
        number: '',
        expiry: '',
        cvc: ''
    });

    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setCardForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleCardSave = (e) => {
        e.preventDefault();
        if (cardForm.name && cardForm.number && cardForm.expiry && cardForm.cvc) {
            setCards([...cards, cardForm]);
            setCardForm({ name: '', number: '', expiry: '', cvc: '' });
            setIsCardModalOpen(false);
        }
    };

    const handleRemoveCard = (index) => {
        const updated = [...cards];
        updated.splice(index, 1);
        setCards(updated);
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8">
            <div className="bg-white rounded-lg shadow p-8 mb-8">
                <h2 className="text-lg font-semibold mb-6">
                    Choose a plan after 30-days free trial
                </h2>
                <div className="flex space-x-2 mb-8">
                    <button className="px-4 py-1 rounded border border-blue-600 text-blue-600 bg-blue-50 font-medium">
                        Monthly
                    </button>
                    <button className="px-4 py-1 rounded border border-gray-200 text-gray-600 bg-gray-50 font-medium">
                        Annually (save 57%)
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan, idx) => (
                        <div
                            key={plan.name}
                            className={`rounded-lg border-2 p-6 cursor-pointer transition-all ${selected === idx ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white"
                                }`}
                            onClick={() => setSelected(idx)}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-base font-medium">{plan.name}</span>
                                {selected === idx && (
                                    <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full font-semibold">
                                        Selected
                                    </span>
                                )}
                            </div>
                            <div className="flex items-end mb-2">
                                <span className="text-3xl font-bold">{plan.price}</span>
                                <span className="ml-1 text-lg text-gray-500">{plan.period}</span>
                            </div>
                            <div className="text-sm text-gray-500">{plan.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Payment Options Header */}
            <div className="flex justify-between mb-6 py-3.5 px-4 bg-gray-50">
                <h2 className="text-lg font-semibold rounded-lg p-2.5 shadow">
                    Payment Options
                </h2>
                <button
                    onClick={() => setIsCardModalOpen(true)}
                    className="text-blue-600 border-b-2 cursor-pointer"
                >
                    Add New Card
                </button>
            </div>

            {/* Render Cards */}
            <div className="space-y-4 mb-6 px-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className=" p-1.5 rounded-lg bg-white shadow flex justify-between items-center"
                    >
                        <div>
                            <p className="font-">{card.name}</p>
                            <p className="text-sm text-gray-500">**** **** **** {card.number.slice(-4)}</p>
                            <p className="text-sm text-gray-500">Exp: {card.expiry}</p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => handleRemoveCard(index)}
                                className="text-red-600 hover:underline"
                            >
                                Remove
                            </button>
                            <button className="text-blue-600 font-semibold border border-blue-600 px-3 py-1 rounded hover:bg-blue-50">
                                Select
                            </button>
                        </div>


                    </div>

                ))}
            </div>

            {/* Modal */}
            {isCardModalOpen && (
                <AddCardModal
                    form={cardForm}
                    onChange={handleCardChange}
                    onCancel={() => setIsCardModalOpen(false)}
                    onSave={handleCardSave}
                />
            )}
            {cards.length > 0 && (
                <div className="px-4 mt-10 border-t pt-6 flex justify-end items-center">
                    <div className="flex justify-end  items-center  mr-4">
                        <p className="text-lg font-medium">
                            Total of the card charges:
                        </p>
                        <span className="text-xl font-bold text-blue-600">
                            {plans[selected].price}
                        </span>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={() => alert(`Paying ${plans[selected].price} with selected card`)}
                    >
                        Pay Now
                    </button>
                </div>
            )}
        </div>
    );
};

export default PlanSelector;
