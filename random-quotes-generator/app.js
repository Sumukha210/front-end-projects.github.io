import axios from "axios";
const btn = document.querySelector("#btn");
const QuotesDom = document.querySelector(".Quotes");
const AuthorDom = document.querySelector(".Author");

const fetchRandomQuotes = async () => {
  const res = await axios.get("https://api.quotable.io/random");
  const data = await res.data;
  return data;
};

const DisplayResult = async () => {
  const res = await fetchRandomQuotes();
  QuotesDom.innerHTML = `${res.content}`;
  AuthorDom.innerHTML = `-${res.author}`;
};

btn.addEventListener("click", DisplayResult);
