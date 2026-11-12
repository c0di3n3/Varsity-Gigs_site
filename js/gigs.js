// Browse gigs: example listings and category filters.
//
// These are EXAMPLES of the kind of work the pilot is aiming for, not live gigs.
// To add or change a listing, edit the GIGS array. To add a category, add it to
// CATEGORIES and use its "id" as the "category" of a gig.

var SIGNUP_URL = "https://tally.so/r/q54a08";

var CATEGORIES = [
  { id: "events", label: "Events" },
  { id: "tutoring", label: "Tutoring" },
  { id: "promotions", label: "Promotions" },
  { id: "admin", label: "Admin" },
  { id: "creative", label: "Creative" },
  { id: "hospitality", label: "Hospitality" }
];

var GIGS = [
  {
    title: "Event registration desk helper",
    category: "events",
    where: "On site, at the venue",
    time: "One day, about 6 hours",
    description: "Welcome guests, check names against a list and hand out name tags at a conference or campus event."
  },
  {
    title: "Event set-up and pack-down crew",
    category: "events",
    where: "On site, at the venue",
    time: "One evening or one morning",
    description: "Help set out chairs, tables and signage before an event, and pack everything away afterwards."
  },
  {
    title: "Grade 10 maths tutor",
    category: "tutoring",
    where: "In person or online",
    time: "2 hours a week",
    description: "Work through homework and exam practice with a high school learner, at a regular weekly time."
  },
  {
    title: "First-year study group leader",
    category: "tutoring",
    where: "On campus",
    time: "One session a week during term",
    description: "Run a small revision group for a first-year module you have already passed well."
  },
  {
    title: "Campus flyer and sampling team",
    category: "promotions",
    where: "On campus",
    time: "Half a day",
    description: "Hand out flyers or samples and tell other students about a product or event."
  },
  {
    title: "Brand ambassador at a market day",
    category: "promotions",
    where: "On site, at the stall",
    time: "One weekend day",
    description: "Stand at a stall, chat to visitors and answer simple questions about what is on offer."
  },
  {
    title: "Data capturing",
    category: "admin",
    where: "Remote",
    time: "5 to 10 hours, flexible",
    description: "Type information from forms or scanned pages into a spreadsheet, carefully and accurately."
  },
  {
    title: "Front desk cover for a small office",
    category: "admin",
    where: "On site",
    time: "A few weekday afternoons",
    description: "Answer the phone, greet visitors and help with filing while regular staff are away."
  },
  {
    title: "Social media content helper",
    category: "creative",
    where: "Remote",
    time: "A few hours a week",
    description: "Draft posts and simple graphics for a small business or a student society."
  },
  {
    title: "Event photographer",
    category: "creative",
    where: "On site, at the event",
    time: "One evening plus editing time",
    description: "Take and lightly edit photos at a society function or small business launch. Own camera needed."
  },
  {
    title: "Waiter for a private function",
    category: "hospitality",
    where: "On site, at the venue",
    time: "One evening",
    description: "Serve food and drinks and help clear tables at a dinner or year-end function."
  },
  {
    title: "Coffee cart assistant",
    category: "hospitality",
    where: "On site",
    time: "Weekend mornings",
    description: "Take orders, handle payments and keep the cart tidy. Barista training is a bonus, not a must."
  }
];

(function () {
  var filtersEl = document.getElementById("gig-filters");
  var listEl = document.getElementById("gig-list");
  var countEl = document.getElementById("gig-count");
  if (!filtersEl || !listEl) return;

  var labelFor = {};
  CATEGORIES.forEach(function (c) { labelFor[c.id] = c.label; });

  var current = "all";
  var fromUrl = new URLSearchParams(window.location.search).get("category");
  if (fromUrl && labelFor[fromUrl.toLowerCase()]) current = fromUrl.toLowerCase();

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function metaRow(label, value) {
    var li = el("li");
    li.appendChild(el("strong", "", label + ": "));
    li.appendChild(document.createTextNode(value));
    return li;
  }

  function gigCard(gig) {
    var card = el("article", "card gig-card");

    var tags = el("div", "gig-tags");
    tags.appendChild(el("span", "tag tag-category", labelFor[gig.category]));
    tags.appendChild(el("span", "tag tag-example", "Example gig"));
    card.appendChild(tags);

    card.appendChild(el("h3", "", gig.title));
    card.appendChild(el("p", "", gig.description));

    var meta = el("ul", "gig-meta");
    meta.appendChild(metaRow("Where", gig.where));
    meta.appendChild(metaRow("Time", gig.time));
    card.appendChild(meta);

    var link = el("a", "btn btn-outline btn-small", "Sign up for gigs like this");
    link.href = SIGNUP_URL;
    link.target = "_blank";
    link.rel = "noopener";
    card.appendChild(link);

    return card;
  }

  function renderFilters() {
    filtersEl.textContent = "";
    [{ id: "all", label: "All" }].concat(CATEGORIES).forEach(function (c) {
      var btn = el("button", "filter-btn", c.label);
      btn.type = "button";
      btn.dataset.category = c.id;
      btn.setAttribute("aria-pressed", String(c.id === current));
      filtersEl.appendChild(btn);
    });
  }

  function renderGigs() {
    var shown = GIGS.filter(function (g) {
      return current === "all" || g.category === current;
    });

    listEl.textContent = "";
    if (shown.length === 0) {
      listEl.appendChild(el("p", "empty-state", "No example gigs in this category yet."));
    } else {
      shown.forEach(function (g) { listEl.appendChild(gigCard(g)); });
    }

    if (countEl) {
      var noun = shown.length === 1 ? "example gig" : "example gigs";
      countEl.textContent = current === "all"
        ? "Showing all " + shown.length + " " + noun
        : "Showing " + shown.length + " " + noun + " in " + labelFor[current];
    }
  }

  filtersEl.addEventListener("click", function (event) {
    var btn = event.target.closest(".filter-btn");
    if (!btn) return;
    current = btn.dataset.category;

    Array.prototype.forEach.call(filtersEl.children, function (b) {
      b.setAttribute("aria-pressed", String(b === btn));
    });
    renderGigs();

    var url = new URL(window.location.href);
    if (current === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", current);
    window.history.replaceState(null, "", url);
  });

  renderFilters();
  renderGigs();
})();
