# La Metisse à dit - Blog Management Guide for Nadine

Welcome! This guide will show you how to easily edit and manage the La Metisse blog without needing to know any technical coding. Everything you need to do is done through GitHub's web interface - just like you would use a word processor online.

---

## 🚀 Getting Started

### Step 1: Access GitHub

1. Go to: **https://github.com/Nelson-1969/lametisse-blog**
2. If you're not already logged in, click **Sign in** and use your GitHub account
3. You'll see the repository with all the blog files

---

## 📝 How to Edit an Existing Article

### Step 1: Navigate to the Article

1. In the GitHub repository, click on the **src** folder
2. Click on the **content** folder
3. Click on the **blog** folder
4. You'll see all the blog articles listed (they look like `2020-10-07-ricktattoo.md`)
5. Click on the article you want to edit

### Step 2: Edit the Article Text

1. Click the **pencil icon** (✏️) in the top right of the file
2. You can now edit the article
3. The article has two parts:

#### Part A: Article Information (at the very top)
```
---
title: "Article Title Here"
pubDate: 2020-10-07T00:00:00
category: "Rencontres"
excerpt: "One-line summary of the article"
---
```

**What you can change:**
- `title`: The main heading of the article
- `category`: Choose ONE of these: `Voyages`, `Rencontres`, `Découvertes`, or `Labutik`
- `excerpt`: A short, catchy one-liner that appears in the blog listing

**Don't change:**
- `pubDate`: Leave the date as is (this controls the article order)

#### Part B: Article Content (below the `---`)

This is where the main text goes. You can:
- Write your article text
- Use **bold** by typing `**text**`
- Use *italics* by typing `*text*`
- Create line breaks by pressing Enter twice
- Add quotes by starting a line with `> `

### Step 3: Add or Update the Featured Photo

After the article information (after the second `---`), add this line to reference a photo:

```
![Featured image](../../../assets/blog/article-name.jpg)
```

The photo should be named something simple like `ricktattoo.jpg` or `2020-10-07-ricktattoo.jpg`

### Step 4: Save Your Changes

1. Scroll to the bottom of the page
2. Click the green **"Commit changes..."** button
3. Write a brief message about what you changed, like:
   - "Updated text in ricktattoo article"
   - "Added photos and corrected typos"
4. Click **"Commit changes"** again

**That's it!** Your changes will automatically publish to the blog within 1-2 minutes. You can refresh the blog to see your updates.

---

## 📸 How to Add Photos to Articles

### Step 1: Upload Photos to GitHub

1. Go to the GitHub repository
2. Navigate to: **src → assets → blog**
3. Click **Add file → Upload files**
4. Click **choose your files** and select the photo(s) from your computer
5. Add a commit message like "Add photos for ricktattoo article"
6. Click **Commit changes**

**Photo Tips:**
- Use JPEG format for best quality and smaller file size
- Name photos clearly: `ricktattoo.jpg` or `2020-10-07-article-name.jpg`
- Photos should be at least 800px wide for good quality
- Keep file sizes under 2MB for faster loading

### Step 2: Link the Photo in Your Article

When editing an article (see "How to Edit an Existing Article" above), add this line wherever you want the photo to appear:

```
![Photo description](../../../assets/blog/photo-name.jpg)
```

Replace `photo-name.jpg` with the actual filename of your photo.

**Example:**
```
# Article Title

This is the beginning of my article...

![Rick and his tattoo work](../../../assets/blog/ricktattoo.jpg)

This is text that comes after the photo...
```

---

## ➕ How to Add a Completely New Article

### Step 1: Create a New Article File

1. Go to: **src → content → blog**
2. Click **Add file → Create new file**
3. Name the file like this: `YYYY-MM-DD-article-name.md`
   - Replace YYYY-MM-DD with today's date (like 2024-11-19)
   - Replace article-name with a simple name (like `voyage-to-paris`)
   - Always end with `.md`

**Example filename:** `2024-11-19-voyage-to-paris.md`

### Step 2: Write Your Article

Paste this template into the file and fill it in:

```
---
title: "Your Article Title Here"
pubDate: 2024-11-19T00:00:00
category: "Voyages"
excerpt: "A short, catchy one-liner about this article"
---

# Your Article Title

Write your article text here. You can use multiple paragraphs.

![Photo description](../../../assets/blog/article-photo.jpg)

More text after the photo...

**Bold text** and *italic text* work too!
```

### Step 3: Save and Publish

1. Scroll to the bottom
2. Click **"Commit new file"**
3. Add a message like "Add new article: Voyage to Paris"
4. Click **"Commit new file"**

Your article will appear on the blog within 1-2 minutes!

---

## 📋 Article Categories

When editing or creating articles, you must choose ONE category:

| Category | Use for |
|----------|---------|
| **Voyages** | Travel stories, adventures, destinations |
| **Rencontres** | People, meetings, interviews, stories about others |
| **Découvertes** | Discoveries, recommendations, interesting finds |
| **Labutik** | Product/shop related content |

---

## ✍️ Writing Tips for the Blog

1. **Titles**: Make them interesting and catchy
2. **Excerpts**: Keep them short (one sentence) - this shows up in the blog listing
3. **Photos**: Add them between paragraphs to break up text
4. **Formatting**: Use bold for emphasis, italics for style
5. **Tone**: Keep the friendly, sarcastic, humorous tone of La Metisse!

---

## 🔄 Publishing & Updates

**When you commit changes:**
- The website automatically builds (takes 1-2 minutes)
- Your changes appear on the live blog at: https://lametisse-blog.nmirthil.workers.dev
- You can refresh the page to see your updates

**To verify your changes published:**
1. Go to the blog: https://lametisse-blog.nmirthil.workers.dev
2. Find your article and check the content
3. If it's not showing yet, wait 1-2 minutes and refresh

---

## ❓ Common Questions

**Q: Can I add links in my articles?**
A: Yes! Use this format: `[Link text](https://example.com)`

**Q: What if I make a mistake?**
A: No problem! Just edit the article again and fix it. You can make as many changes as needed.

**Q: Can I delete or hide an article?**
A: Yes, but please ask Nelson first. Articles can be edited but not deleted without his help.

**Q: Can I change the category of an article?**
A: Yes! Just edit the article and change the `category:` field to a different category.

**Q: How do I add a new line/paragraph?**
A: Press Enter twice to create a new paragraph.

**Q: What if photos don't show up?**
A: Make sure:
1. The photo filename is spelled exactly the same in the article
2. The photo was uploaded to `src/assets/blog/`
3. Wait 1-2 minutes and refresh the page

---

## 📞 Need Help?

If something isn't working or you're unsure about anything, please ask Nelson. He can:
- Help you troubleshoot photo uploads
- Add new categories if needed
- Fix any technical issues

---

## 🎉 You're All Set!

You now have everything you need to manage the La Metisse blog. Start by editing one article, then try adding a new one. Have fun sharing your stories!

**Remember:** The blog is live for the world to see, so double-check your work before committing changes. 😊

---

**Blog URL:** https://lametisse-blog.nmirthil.workers.dev
**GitHub Repository:** https://github.com/Nelson-1969/lametisse-blog
**Articles Location:** src/content/blog/
**Photos Location:** src/assets/blog/
