import React, { useState, useEffect } from "react";

const FaqComponent = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState([]);

  useEffect(() => {
    const url =
      "https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-faq/records?limit=20&refine=lang%3A%22en%22";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const faqsData = data.results.map((faq) => ({
          id: faq.id,
          question: faq.label,
          answer: faq.body,
        }));
        setFaqs(faqsData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filteredResults = faqs.filter((faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFaqs(filteredResults);
  }, [searchQuery, faqs]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="Search-Faq">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Condition pour afficher la liste seulement si la recherche n'est pas vide */}
      {searchQuery !== "" && (
        <ul>
          {filteredFaqs.map((faq) => (
            <li key={faq.id}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FaqComponent;
