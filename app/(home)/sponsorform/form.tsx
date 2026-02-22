"use client";

import { useState } from "react";

type Field = {
    id: string;
    label: string;
    type: "text" | "email" | "tel" | "textarea" | "select";
    required?: boolean;
    placeholder?: string;
    options?: string[];
};
const brochures = [
    {
        name: "CodeFest 2.0 Brochure",
        file: "/brochure/codefest-brochure.pdf",
    },
];

const fields: Field[] = [
    {
        id: "company",
        label: "Company Name",
        type: "text",
        required: true,
        placeholder: "Enter your company name",
    },
    {
        id: "contactPerson",
        label: "Contact Person Name",
        type: "text",
        required: true,
        placeholder: "Enter contact person name",
    },
    {
        id: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "Enter official email",
    },
    {
        id: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter phone number",
    },
    {
        id: "sponsorshipType",
        label: "Sponsorship Interest",
        type: "select",
        required: true,
        options: [
            "Title Sponsor",
            "Platinum Sponsor",
            "Gold Sponsor",
            "Silver Sponsor",
            "Bronze Sponsor",
            "General Sponsor",
        ],
    },
    {
        id: "message",
        label: "Additional Message",
        type: "textarea",
        placeholder: "Tell us about your interest or expectations",
    },
];

export default function SponsorInterestPage() {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    function handleChange(id: string, value: string) {
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
            // BACKEND READY
            // Replace with your API endpoint
            await fetch("/api/sponsor-interest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            setSubmitted(true);
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }

        setLoading(false);
    }

    if (submitted) {
        return (
            <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-yellow-400">
                        Thank you for your interest
                    </h1>
                    <p className="text-white/70">
                        Our team will contact you shortly.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-black text-white px-6 py-24">

            <div className="max-w-2xl mx-auto space-y-8">

                {/* Heading */}
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-bold text-yellow-400">
                        Sponsor CodeFest
                    </h1>

                    <p className="text-white/70">
                        Fill this form if you are interested in sponsoring CodeFest 2.0
                    </p>
                </div>


                {/* Brochure Section */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">

                    <h2 className="text-yellow-400 font-semibold text-lg">
                        Sponsorship Documents
                    </h2>

                    <div className="space-y-3">

                        {brochures.map((doc, i) => (
                            <div
                                key={i}
                                className="
                flex items-center justify-between
                bg-black/40
                border border-white/10
                rounded-lg
                px-4 py-3
                hover:border-yellow-400/40
                transition
              "
                            >

                                <span className="text-white/80 text-sm">
                                    {doc.name}
                                </span>

                                <div className="flex items-center gap-3">

                                    <a
                                        href={doc.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                    text-yellow-400
                    hover:text-yellow-300
                    text-sm font-medium
                  "
                                    >
                                        View
                                    </a>

                                    <a
                                        href={doc.file}
                                        download
                                        className="
                    bg-yellow-500
                    hover:bg-yellow-400
                    text-black
                    text-sm
                    px-3 py-1.5
                    rounded-md
                    font-medium
                    transition
                  "
                                    >
                                        Download
                                    </a>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>


                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="
          space-y-6
          bg-white/5
          border border-white/10
          rounded-xl
          p-8
        "
                >

                    {fields.map((field) => (
                        <div key={field.id} className="space-y-2">

                            <label className="text-sm text-yellow-400">
                                {field.label}
                                {field.required && " *"}
                            </label>


                            {/* TEXTAREA */}
                            {field.type === "textarea" && (
                                <textarea
                                    required={field.required}
                                    placeholder={field.placeholder}
                                    value={formData[field.id] || ""}
                                    onChange={(e) =>
                                        handleChange(field.id, e.target.value)
                                    }
                                    className="
                  w-full
                  bg-black
                  border border-white/20
                  rounded-lg
                  px-4 py-2
                  outline-none
                  focus:border-yellow-400
                "
                                />
                            )}


                            {/* SELECT */}
                            {field.type === "select" && (
                                <select
                                    required={field.required}
                                    value={formData[field.id] || ""}
                                    onChange={(e) =>
                                        handleChange(field.id, e.target.value)
                                    }
                                    className="
                  w-full
                  bg-black
                  border border-white/20
                  rounded-lg
                  px-4 py-2
                  outline-none
                  focus:border-yellow-400
                "
                                >

                                    <option value="">
                                        Select option
                                    </option>

                                    {field.options?.map((opt) => (
                                        <option key={opt} value={opt}>
                                            {opt}
                                        </option>
                                    ))}

                                </select>
                            )}


                            {/* INPUT */}
                            {["text", "email", "tel"].includes(field.type) && (
                                <input
                                    type={field.type}
                                    required={field.required}
                                    placeholder={field.placeholder}
                                    value={formData[field.id] || ""}
                                    onChange={(e) =>
                                        handleChange(field.id, e.target.value)
                                    }
                                    className="
                  w-full
                  bg-black
                  border border-white/20
                  rounded-lg
                  px-4 py-2
                  outline-none
                  focus:border-yellow-400
                "
                                />
                            )}

                        </div>
                    ))}


                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="
            w-full
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            font-semibold
            py-3
            rounded-lg
            transition
          "
                    >
                        {loading ? "Submitting..." : "Submit Interest"}
                    </button>

                </form>

            </div>

        </section>
    );
}