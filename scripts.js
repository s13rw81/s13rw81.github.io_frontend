// Typing effect
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

class TypeAsync extends HTMLSpanElement {
  async type(text) {
    for (const char of text) {
      this.textContent += char;
      await sleep(50);
    }
  }

  async delete() {
    while (this.textContent.length) {
      this.textContent = this.textContent.slice(0, -1);
      await sleep(30);
    }
  }
}

customElements.define("type-async", TypeAsync, { extends: "span" });

async function initType() {
  const el = document.querySelector("#type-text");
  const phrases = [
    "Python Backend Developer",
    "Django Specialist",
    "API & Cloud Engineer",
    "Remote / Bangalore"
  ];

  while (true) {
    for (const text of phrases) {
      await el.type(text);
      await sleep(1500);
      await el.delete();
    }
  }
}

document.getElementById("year").textContent = new Date().getFullYear();
initType();


// LeetCode fetch start
async function loadLeetCode() {
  try {
    const res = await fetch("https://leetcode.com/graphql/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com"
      },
      body: JSON.stringify({
        query: `query userPublicProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              ranking
            }
          }
        }`,
        variables: { username: "s13rw81" }
      })
    });

    const data = await res.json();

    const rank = data?.data?.matchedUser?.profile?.ranking;

    if (rank) {
      document.getElementById("leetcode-rank").textContent = rank.toLocaleString();
      document.getElementById("leetcode-container").style.display = "inline-flex";
    }

  } catch (err) {
    console.log("LeetCode fetch failed:", err);
  }
}

loadLeetCode();
// LeetCode fetch end