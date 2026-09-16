# Remix of Boitas Crafted

This version is much cleaner and more aligned with Boitas' current stage. I would keep the website focused on brand + products + WhatsApp ordering. No gifting, no blog, no unnecessary pages.

Copy this prompt into Lovable:

Build a Premium E-Commerce Website for Boitas

Project Overview

Build a modern, premium, mobile-first e-commerce website for Boitas, an authentic Odia food brand.

The website should be clean, elegant, and storytelling-driven. The objective is to showcase products, build trust, tell the Boitas story, and enable customers to order directly through WhatsApp.

There should be NO payment gateway, NO checkout, and NO user accounts.

Every order should be redirected to:

https://wa.me/919778708100

The WhatsApp message should automatically include the selected product(s) and quantity.

Example:

Hi Boitas,

I would like to order:

• Sweet Khaja (500g) × 2
• Arisa (250g) × 1

Please assist me with my order.

Brand Identity

Brand Name: Boitas

Tagline: Taste of Odisha. Crafted with Tradition.

The brand should feel:

Premium

Authentic

Heritage

Minimal

Warm

Modern

Trustworthy

The website should not look like a marketplace. It should feel like a premium food brand that celebrates Odisha's culinary heritage.

Design Language

Use a luxurious but minimal design.

Colors

Primary
Deep Maroon (#7A1F1F)

Secondary
Warm Beige (#F5E6D3)

Accent
Temple Gold (#D9A441)

Background
Off White (#FFFDF9)

Text
Dark Charcoal (#222222)

Typography

Elegant serif font for headings

Clean modern sans-serif for body text

Large spacing

Rounded cards

Soft shadows

Premium food photography

Smooth animations

Plenty of white space

Website Structure

1. Home

The homepage should immediately communicate authenticity and quality.

Hero Section

Large full-screen banner with beautiful traditional Odia sweets.

Headline

Authentic Odia Delicacies, Crafted with Tradition

Subheading

Bringing the timeless flavours of Odisha to homes across India through handcrafted sweets and savouries.

Buttons

Explore Products

Order on WhatsApp

Featured Products

Display six featured products.

Each card should contain:

Product Image

Product Name

Price

Weight

Short Description

Order Now button

Why Boitas

Display four elegant feature cards.

Authentic Recipes

Premium Ingredients

Made in Odisha

Freshly Prepared

Our Heritage

A storytelling section explaining Boitas' mission.

Show the journey:

Traditional Recipes

↓

Local Ingredients

↓

Handcrafted Preparation

↓

Premium Packaging

↓

Delivered with Care

Use illustrations, icons, and subtle animations.

Customer Reviews

Elegant testimonial cards.

Call to Action

A full-width section with a warm background.

Bring the Taste of Odisha to Your Home

Button:

Order on WhatsApp

2. Products

Create a modern catalogue page.

Include category filters:

Sweets

Savouries

Display products in a responsive grid.

Each product card should include:

Image

Name

Short Description

Weight Options

Price

Order Now

Clicking a product opens a dedicated Product Detail page.

3. Product Detail

Each product page should include:

Large Image Gallery

Product Name

Price

Weight Selection

Quantity Selector

Product Description

Ingredients

Shelf Life

Storage Instructions

Authentic Story Behind the Product

Buttons:

Add to Cart

Buy Now

Both should eventually redirect to WhatsApp.

4. About Us

Create a beautiful storytelling page.

Include:

Our Story

Explain how Boitas is preserving Odisha's traditional food culture while bringing it to modern consumers.

Our Mission

To make authentic Odia delicacies accessible across India without compromising on tradition or quality.

Our Values

Authenticity

Quality

Tradition

Community

Craftsmanship

Include beautiful lifestyle imagery throughout.

5. Stories

This page should celebrate Odisha's food heritage.

Display story cards such as:

The Story of Khaja

Why Arisa is Odisha's Traditional Sweet

The Heritage of Chuda Mixture

Festivals and Traditional Foods of Odisha

Handmade with Generations of Experience

Each story should include:

Cover Image

Title

Short Summary

Read More

The design should feel like a premium magazine.

6. Contact Us

Minimal and elegant.

Include:

Contact Number

WhatsApp

Email

Business Address

Embedded Google Map

Contact Form (Name, Email, Phone, Message)

Primary CTA:

Chat with Us on WhatsApp

Navigation

Sticky navigation with transparent background on the hero section.

Menu:

Home

Products

About Us

Stories

Contact Us

On the right:

Order on WhatsApp

Shopping Experience

Create a lightweight shopping cart.

Users can:

Add Products

Remove Products

Update Quantity

Instead of checkout, clicking Proceed to Order should generate a formatted WhatsApp message containing all selected items and redirect to:

https://wa.me/919778708100

Footer

Include:

Quick Links

Products

About Us

Stories

Contact

Social Media Icons

Copyright

Animations

Use Framer Motion.

Include:

Smooth page transitions

Fade-in sections

Image hover effects

Button hover animations

Sticky navigation

Smooth scrolling

Animations should be subtle and premium.

Technology

Use:

Next.js (App Router)

React

TypeScript

Tailwind CSS

Framer Motion

Lucide React Icons

Use local JSON for products and stories. Structure the code so it can later be connected to a CMS or backend.

Overall Creative Direction

The experience should feel like a blend of Paper Boat, The Whole Truth Foods, and Apple—minimal, elegant, and story-first. The focus is on showcasing authentic Odia food through beautiful imagery, thoughtful storytelling, and a seamless WhatsApp ordering experience. Every page should reinforce Boitas as a premium heritage food brand rather than a conventional online grocery store.

use the skus and attached logo.

tagline "layers of joy in every bite"

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://odisha-taste-direct.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2da5d16f-ffc6-43d6-9891-61a2c397308d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
