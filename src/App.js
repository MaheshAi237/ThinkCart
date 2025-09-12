import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';
import './App.css';

// --- Data (truncated for brevity, keep your deals array here) ---
const deals = [
  
{ id: 1, title: "BEDLORE Waterproof Mattress Protector, Queen Size Mattress Pad Noiseless with Deep Pocket 6-18 Depth, Soft Breathable Dirt-Proof Bed Mattress Cover Washable for Home, Bedroom, Hotel (Gray)", deal_url: "https://tinyurl.com/28f5znsm", image_url: "https://m.media-amazon.com/images/I/71+omVwPiXL._AC_SX679_.jpg", price: 23.99, original_price: 29.99 },
{ id: 2, title: "Bedsure White Duvet Cover Queen Size - 3 Pieces Prewashed Extra Soft Bedding Set, Includes 1 Duvet Cover 90x90 Inches with Zipper Closure & 2 Pillow Shams, Comforter Not Included", deal_url: "https://tinyurl.com/2afz4lb8", image_url: "https://m.media-amazon.com/images/I/81QF0RHosBL._AC_SX679_.jpg", price: 19.99, original_price: 39.98 },
{ id: 3, title: "Bissell CleanView Compact Upright Vacuum, Fits in Dorm Rooms & Apartments, Lightweight with Powerful Suction and Removable Extension Wand, 3508", deal_url: "https://tinyurl.com/252rjv4v", image_url: "https://m.media-amazon.com/images/I/61p-lLb7sTL._AC_SX679_.jpg", price: 53.99, original_price: 59.99 },
{ id: 4, title: "Jugbow Dog Shock Collar - 4200FT Dog Training Collar with Remote Innovative IPX7 Waterproof with 4 Training Modes, Rechargeable E-Collar for All Breeds", deal_url: "https://tinyurl.com/29t5srab", image_url: "https://m.media-amazon.com/images/I/81GrhcfEMeL._AC_SX679_.jpg", price: 37.79, original_price: 59.98 },
{ id: 5, title: "Like-New Blink Outdoor 4 (newest model), Wire-free smart security camera, two-year battery life, two-way audio, HD live view, enhanced motion detection, Works with Alexa – 2 camera system", deal_url: "https://tinyurl.com/28682zol", image_url: "https://m.media-amazon.com/images/I/61bDrz5jicL._SX425_.jpg", price: 74.99, original_price: 166.64 },
{ id: 6, title: "Momcozy Pregnancy Pillows for Sleeping, U Shaped Full Body Maternity Pillow with Removable Cover - Support for Back, Legs, Belly, HIPS for Pregnant Women, 57 Inch Pregnancy Pillow for Women, Grey", deal_url: "https://tinyurl.com/25rnb46b", image_url: "https://m.media-amazon.com/images/I/71zOHQc3x2L._SX569_.jpg", price: 38.24, original_price: 44.99 },
{ id: 7, title: "Novilla King Size Mattress, 12 Inch Gel Memory Foam King Mattress for Cool Night & Pressure Relief, Medium Plush Feel with Motion Isolating, Bliss", deal_url: "https://tinyurl.com/2dnrxrch", image_url: "https://m.media-amazon.com/images/I/71OFdvSnjdL._AC_SX569_.jpg", price: 309.41, original_price: 368.35 },
{ id: 8, title: "RUGPADUSA - Basics - 9x12 - 1/2 Thick - 100% Felt - Protective Cushioning Rug Pad - Safe for All Floors and Finishes Including Hardwoods", deal_url: "https://tinyurl.com/2bapm784", image_url: "https://m.media-amazon.com/images/I/91-2yYdd8AL._AC_SX679_.jpg", price: 139.94, original_price: 174.93 },
{ id: 9, title: "REPEL Windproof Travel Umbrella - Compact & Withstands Winds up to 85MPH , Strongest Premium Auto Folding Umbrella for Rain and Sun - Durable, Light & Portable for Women & Men , Fits Backpack & Cars", deal_url: "https://tinyurl.com/29ndc9sp", image_url: "https://m.media-amazon.com/images/I/71zIdlkvCYL._AC_SY500_.jpg", price: 19.99, original_price: 44.42 },
{ id: 10, title: "SNSLXH 5 Pack Stackable Closet Storage Basket, Multifunctional & Foldable Closet Organizer for Bathroom Kitchen Laundry Room Wardrobe Storage, Space-Saving Clothes Storage Drawer Organizer, White", deal_url: "https://tinyurl.com/2cq6d5st", image_url: "https://m.media-amazon.com/images/I/71SyPSqL6ML._AC_SX679_.jpg", price: 35.96, original_price: 59.93 },
{ id: 11, title: "Shark HD430 FlexStyle Air Styling & Drying System, Powerful Hair Dryer Brush & Multi-Styler with Auto-Wrap Curlers, Paddle Brush, Oval Brush, Concentrator Attachment, Stone", deal_url: "https://tinyurl.com/25q9fmzo", image_url: "https://m.media-amazon.com/images/I/71XnLIh6Q1L._SX425_.jpg", price: 249, original_price: 350.7 },
{ id: 12, title: "Micro Ingredients Vitamin D3 10,000 IU + K2 MK-7 200 mcg, 300 Softgels | Virgin Coconut Oil | 2-in-1 Bone, Immune & Heart Support | Easy to Swallow, Non-GMO", deal_url: "https://tinyurl.com/2d9pg5mt", image_url: "https://m.media-amazon.com/images/I/71gx5oPi4kL._AC_SX425_.jpg", price: 27.96, original_price: 34.95 },
{ id: 13, title: "REPEL Windproof Travel Umbrella - Compact & Withstands Winds up to 85MPH , Strongest Premium Auto Folding Umbrella for Rain and Sun - Durable, Light & Portable for Women & Men , Fits Backpack & Cars", deal_url: "https://tinyurl.com/24wpq5rx", image_url: "https://m.media-amazon.com/images/I/71L7PESzigL._AC_SY500_.jpg", price: 27.98, original_price: 43.72 },
{ id: 14, title: "Bedsure Khaki Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/26ajeg4z", image_url: "https://m.media-amazon.com/images/I/81pUmIEG+vL._AC_SX679_.jpg", price: 24.69, original_price: 39.82 },
{ id: 15, title: "Momcozy Pregnancy Pillows for Sleeping, U Shaped Full Body Pillow for Pregnancy Women with Removable Jersey Cotton Cover, 57 Inch Maternity Pillow, Grey", deal_url: "https://tinyurl.com/26cze2q9", image_url: "https://m.media-amazon.com/images/I/61dv7my2FGL._SX569_.jpg", price: 44.79, original_price: 55.99 },
{ id: 16, title: "Momcozy Pregnancy Pillows with Cooling Cover, U-Shaped Full Body Maternity Pillow for Side Sleepers 57 Inch - Support for Back, Hip, Belly, Legs for Pregnant Women", deal_url: "https://tinyurl.com/29bywfyz", image_url: "https://m.media-amazon.com/images/I/71tDxp7Ug+L._SX569_.jpg", price: 55.24, original_price: 64.99 },
{ id: 17, title: "Momcozy Pregnancy Pillows for Sleeping, U Shaped Full Body Maternity Pillow for Side Sleeping - Support for Back, Legs, Belly, HIPS, 57 Inch, Pink", deal_url: "https://tinyurl.com/285qcxr9", image_url: "https://m.media-amazon.com/images/I/71RYayGUFwL._SX569_.jpg", price: 47.59, original_price: 55.99 },
{ id: 18, title: "REPEL Windproof Travel Umbrella - Compact & Withstands Winds up to 85MPH , Strongest Premium Auto Folding Umbrella for Rain and Sun - Durable, Light & Portable for Women & Men , Fits Backpack & Cars", deal_url: "https://tinyurl.com/2cacvbzp", image_url: "https://m.media-amazon.com/images/I/61aTeMJDNZL._AC_SY500_.jpg", price: 37.99, original_price: 55.06 },
{ id: 19, title: "Momcozy U Shaped Pregnancy Pillows with Cotton Removable Cover, 57 Inch Full Body Pillow Maternity Support, Must Have for Pregnant Women, Hatha Grey", deal_url: "https://tinyurl.com/29nnlgbg", image_url: "https://m.media-amazon.com/images/I/717H161+-0L._SX569_.jpg", price: 44.79, original_price: 59.72 },
{ id: 20, title: "REPEL Windproof Travel Umbrella - Compact & Withstands Winds up to 85MPH , Strongest Premium Auto Folding Umbrella for Rain and Sun - Durable, Light & Portable for Women & Men , Fits Backpack & Cars", deal_url: "https://tinyurl.com/22gtky2h", image_url: "https://m.media-amazon.com/images/I/61iLMQF1a9L._AC_SY500_.jpg", price: 49.99, original_price: 80.63 },
{ id: 21, title: "REPEL Windproof Travel Umbrella - Compact & Withstands Winds up to 85MPH , Strongest Premium Auto Folding Umbrella for Rain and Sun - Durable, Light & Portable for Women & Men , Fits Backpack & Cars", deal_url: "https://tinyurl.com/27dcjt25", image_url: "https://m.media-amazon.com/images/I/61cnQrLx7SL._AC_SY500_.jpg", price: 67.98, original_price: 89.45 },
{ id: 22, title: "Bedsure Deep Beige Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/25yy7tqz", image_url: "https://m.media-amazon.com/images/I/81j6maJu+KL._AC_SX679_.jpg", price: 24.69, original_price: 39.82 },
{ id: 23, title: "Bedsure Brown Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/2bt7zy9c", image_url: "https://m.media-amazon.com/images/I/81PP0+XonTL._AC_SX679_.jpg", price: 27.99, original_price: 39.99 },
{ id: 24, title: "SNSLXH 5 Pack Stackable Closet Organizer Box, Multifunctional & Foldable Closet Storage Basket for Bathroom Kitchen Laundry Room Wardrobe Storage, Space-Saving Clothes Storage Drawer Organizer, Yellow", deal_url: "https://tinyurl.com/2xh58cnm", image_url: "https://m.media-amazon.com/images/I/81PASsfLVvL._AC_SX679_.jpg", price: 39.98, original_price: 59.67 },
{ id: 25, title: "SNSLXH 5 Pack Stackable Closet Organizer Box, Multifunctional & Foldable Closet Storage Basket for Bathroom Kitchen Laundry Room Wardrobe Storage, Space-Saving Clothes Storage Drawer Organizer, Green", deal_url: "https://tinyurl.com/22ozuj3n", image_url: "https://m.media-amazon.com/images/I/81OehORe9XL._AC_SX679_.jpg", price: 39.98, original_price: 59.67 },
{ id: 26, title: "SNSLXH 5 Pack Stackable Closet Organizer Box, Multifunctional & Foldable Closet Storage Basket for Bathroom Kitchen Laundry Room Wardrobe Storage, Space-Saving Clothes Storage Drawer Organizer, Pink", deal_url: "https://tinyurl.com/2855u97n", image_url: "https://m.media-amazon.com/images/I/81v-7+GGFkL._AC_SX679_.jpg", price: 39.98, original_price: 59.67 },
{ id: 27, title: "Bedsure Bright White Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/2b8fvrm5", image_url: "https://m.media-amazon.com/images/I/81pq3AhZGPL._AC_SX679_.jpg", price: 27.99, original_price: 39.99 },
{ id: 28, title: "Momcozy Pregnancy Pillows for Sleeping, U Shaped Full Body Pillow 57 Inch for Pregnant Women with Back, Hip, Leg, Belly Support, Washable Jersey Cotton Cover Included, Light Blue", deal_url: "https://tinyurl.com/27gu33fd", image_url: "https://m.media-amazon.com/images/I/61WCjzRNW+L._SX569_.jpg", price: 47.59, original_price: 55.99 },
{ id: 29, title: "REPEL Windproof Travel Umbrella - Compact & Withstands Winds up to 85MPH , Strongest Premium Auto Folding Umbrella for Rain and Sun - Durable, Light & Portable for Women & Men , Fits Backpack & Cars", deal_url: "https://tinyurl.com/23acrvco", image_url: "https://m.media-amazon.com/images/I/81mhlEuuYkL._AC_SY550_.jpg", price: 23.99, original_price: 39.98 },
{ id: 30, title: "Bedsure Skipper Blue Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/2c4radg5", image_url: "https://m.media-amazon.com/images/I/81nz2thkEcL._AC_SX679_.jpg", price: 21.99, original_price: 27.84 },
{ id: 31, title: "20 Pack Vacuum Storage Bags, Space Saver Bags (4 Jumbo/4 Large/4 Medium/4 Small/4 Roll) Compression for Comforters and Blankets, Sealer Clothes Storage, Hand Pump Included", deal_url: "https://tinyurl.com/23ser7qe", image_url: "https://m.media-amazon.com/images/I/81JmVgvOmCL._AC_SX679_.jpg", price: 17.49, original_price: 30.16 },
{ id: 32, title: "(2025 Upgrade) Aiper Scuba S1 Robotic Pool Cleaner, Wall & Waterline Cleaning, Double Filtration, Extended 180-Min Battery Life, Smart Navigation, App Support, OTA Upgrade", deal_url: "https://tinyurl.com/29meuxpj", image_url: "https://m.media-amazon.com/images/I/71A4qnh0U2L._AC_SX569_.jpg", price: 569.98, original_price: 838.21 },
{ id: 33, title: "AOSU Security Cameras Outdoor Wireless, 4 Cam-Kit, No Subscription, Solar-Powered, Home Security Cameras System with 360° Pan & Tilt, Auto Tracking, 2K Color Night Vision, Easy Setup, 5G & 2.4G WiFi", deal_url: "https://tinyurl.com/28yw2ct3", image_url: "https://m.media-amazon.com/images/I/61qPKBHs15L._AC_SX425_.jpg", price: 319.97, original_price: 432.39 },
{ id: 34, title: "Ultra Pain Relief Cooling Pillow for Neck Support, Adjustable Cervical Pillow Cozy Sleeping, Odorless Ergonomic Contour Memory Foam Pillows, Orthopedic Bed Pillow for Side Back Stomach Sleeper", deal_url: "https://tinyurl.com/2agse9nj", image_url: "https://m.media-amazon.com/images/I/71D6+wIT+tL._AC_SX679_.jpg", price: 35.98, original_price: 59.97 },
{ id: 35, title: "Bedsure White Duvet Cover Queen Size - 3 Pieces Prewashed Extra Soft Bedding Set, Includes 1 Duvet Cover 90x90 Inches with Zipper Closure & 2 Pillow Shams, Comforter Not Included", deal_url: "https://tinyurl.com/2afz4lb8", image_url: "https://m.media-amazon.com/images/I/81QF0RHosBL._AC_SX679_.jpg", price: 19.99, original_price: 39.98 },
{ id: 36, title: "Bissell Pet Hair Eraser Allergen Lift-Off with Powerful Suction, HEPA, Tangle-Free Brush Roll, 39883", deal_url: "https://tinyurl.com/26fnxpzw", image_url: "https://m.media-amazon.com/images/I/71UcKaNoGEL._AC_SX679_.jpg", price: 139.99, original_price: 189.18 },
{ id: 37, title: "Chefman Countertop Microwave Oven 0.7 Cu. Ft., 700 Watts with 10 Power Levels, 6 Cooking Presets with One-Touch Express Cook, Eco Mode, Child Safety Lock, & Mute Button - Black", deal_url: "https://tinyurl.com/2ypgthjc", image_url: "https://m.media-amazon.com/images/I/61Xfgx37IBL._AC_SX679_.jpg", price: 69.99, original_price: 99.99 },
{ id: 38, title: "Dreamscape Queen Mattress, 12 Inch Queen Size Mattresses in a Box, Memory Foam Hybrid Mattress with Individual Pocket Spring for Motion Isolation, Pressure Relief, Medium Firm Feel, CertiPUR-US", deal_url: "https://tinyurl.com/29h7jxgj", image_url: "https://m.media-amazon.com/images/I/71pN+iU+LuL._AC_SX679_.jpg", price: 159.00, original_price: 217.81 },
{ id: 39, title: "Flexi Hose with 8 Function Nozzle, 100FT - Lightweight Expandable Garden Hose, No-Kink Flexibility, 3/4 Inch Solid Brass Fittings and Double Latex Core", deal_url: "https://tinyurl.com/245ene6l", image_url: "https://m.media-amazon.com/images/I/81MrgOPztoL._AC_SX679_.jpg", price: 67.88, original_price: 90.51 },
{ id: 40, title: "Hisense 55 E6 Cinema Series QLED 4K UHD Smart Fire TV (55E6QF, 2025 Model) - QLED, AI Light Sensor, Dolby Vision · Atmos, Voice Remote with Alexa, Motion Rate 120, HDR 10+ Adaptive, Game Mode Plus", deal_url: "https://tinyurl.com/29s3zblt", image_url: "https://m.media-amazon.com/images/I/7113UwWos6L._AC_SX425_.jpg", price: 287.99, original_price: 429.84 },
{ id: 41, title: "LAURA GELLER NEW YORK Award-Winning Baked Balance-n-Brighten Color Correcting Powder Foundation - Light - Buildable Light to Medium Coverage - Demi-Matte Natural Finish", deal_url: "https://tinyurl.com/2aqxxpvr", image_url: "https://m.media-amazon.com/images/I/71zh8GABKAL._SX425_.jpg", price: 20.90, original_price: 37.32 },
{ id: 42, title: "Roku Streaming Stick Plus 2025 - 4K & HDR Roku Streaming Device for TV with Voice Remote - Free & Live TV", deal_url: "https://tinyurl.com/28w4a58k", image_url: "https://m.media-amazon.com/images/I/71Nh6Ngs+-L._AC_SX425_.jpg", price: 29.00, original_price: 39.73 },
{ id: 43, title: "Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Midnight Blue WH1000XM4", deal_url: "https://tinyurl.com/22h4xmjn", image_url: "https://m.media-amazon.com/images/I/61AQDfwqfqL._AC_SX425_.jpg", price: 198.00, original_price: 347.37 },
{ id: 44, title: "Walking Pad Treadmill with 12% 9-Level Auto Incline, 450 lbs Capacity RGB LED Screen, Bluetooth Speaker Under Desk Treadmill, Compact Treadmills for Home Hiking", deal_url: "https://tinyurl.com/26rltzku", image_url: "https://m.media-amazon.com/images/I/71sH9+gxMdL._AC_SX569_.jpg", price: 296.00, original_price: 448.48 },
{ id: 45, title: "Tineco iFLOOR 3 Breeze Complete Wet Dry Vacuum Cordless Floor Cleaner and Mop One-Step Cleaning for Hard Floors", deal_url: "https://tinyurl.com/28x3n8xd", image_url: "https://m.media-amazon.com/images/I/71rvT22VH3L._AC_SX679_.jpg", price: 189.00, original_price: 258.9 },
{ id: 46, title: "Utopia Bedding Queen Sheet Set – 4 Piece Bed Sheets for Queen Size Bed, Soft and Breathable Microfiber, Includes 1 Fitted Sheet, 1 Flat Sheet and 2 Pillowcases (Grey)", deal_url: "https://tinyurl.com/22rqqpjq", image_url: "https://m.media-amazon.com/images/I/713afJ6oJ+L._AC_SX679_.jpg", price: 13.48, original_price: 22.1 },
{ id: 47, title: "Amazon Fire TV 40 2-Series (newest model), HD smart TV with Fire TV Alexa Voice Remote, stream live TV without cable", deal_url: "https://tinyurl.com/28vpqrr7", image_url: "https://m.media-amazon.com/images/I/71EwQR+Uc0L._AC_SX425_.jpg", price: 179.99, original_price: 249.99 },
{ id: 48, title: "LAURA GELLER NEW YORK Award-Winning Baked Balance-n-Brighten Color Correcting Powder Foundation - Fair - Buildable Light to Medium Coverage - Demi-Matte Natural Finish", deal_url: "https://tinyurl.com/2a5x8mnj", image_url: "https://m.media-amazon.com/images/I/716f5ea4zaL._SX425_.jpg", price: 18.00, original_price: 36.73 },
{ id: 49, title: "LAURA GELLER NEW YORK Award-Winning Baked Balance-n-Brighten Color Correcting Powder Foundation - Porcelain - Buildable Light to Medium Coverage - Demi-Matte Natural Finish", deal_url: "https://tinyurl.com/28dq9wr4", image_url: "https://m.media-amazon.com/images/I/71F-vRFPqbL._SX425_.jpg", price: 17.10, original_price: 38 },
{ id: 50, title: "Utopia Bedding Twin Sheet Set – 3 Piece Bed Sheets for Twin Size Bed, Soft and Breathable Microfiber, Includes 1 Fitted Sheet, 1 Flat Sheet and 1 Pillowcase (Beige)", deal_url: "https://tinyurl.com/23w2gaz6", image_url: "https://m.media-amazon.com/images/I/61e3cGe8aAL._AC_SY879_.jpg", price: 13.29, original_price: 17.96 },
{ id: 51, title: "LAURA GELLER NEW YORK Award-Winning Baked Balance-n-Brighten Color Correcting Powder Foundation - Golden Medium - Buildable Light to Medium Coverage - Demi-Matte Natural Finish", deal_url: "https://tinyurl.com/273jwpo9", image_url: "https://m.media-amazon.com/images/I/71xKfhMU+9L._SX425_.jpg", price: 22.21, original_price: 37.02 },
{ id: 52, title: "LAURA GELLER NEW YORK Award-Winning Baked Balance-n-Brighten Color Correcting Powder Foundation - Sand - Buildable Light to Medium Coverage - Demi-Matte Natural Finish", deal_url: "https://tinyurl.com/23l2w8sp", image_url: "https://m.media-amazon.com/images/I/71fDyBLF4EL._SX425_.jpg", price: 18.54, original_price: 33.11 },
{ id: 53, title: "LAURA GELLER NEW YORK Award-Winning Baked Balance-n-Brighten Color Correcting Powder Foundation - Medium - Buildable Light to Medium Coverage - Demi-Matte Natural Finish", deal_url: "https://tinyurl.com/2byb7g9x", image_url: "https://m.media-amazon.com/images/I/71J-nynsFHL._SX425_.jpg", price: 19.00, original_price: 35.85 },
{ id: 54, title: "Bedsure Khaki Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/26ajeg4z", image_url: "https://m.media-amazon.com/images/I/81pUmIEG+vL._AC_SX679_.jpg", price: 24.69, original_price: 39.82 },
{ id: 55, title: "Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Silver WH1000XM4", deal_url: "https://tinyurl.com/2yklkwl4", image_url: "https://m.media-amazon.com/images/I/61UgZSYRllL._AC_SX425_.jpg", price: 198.00, original_price: 347.37 },
{ id: 56, title: "Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black WH1000XM4", deal_url: "https://tinyurl.com/28p3spge", image_url: "https://m.media-amazon.com/images/I/61oqO1AMbdL._AC_SX425_.jpg", price: 198.00, original_price: 347.37 },
{ id: 57, title: "Utopia Bedding Twin Sheet Set – 3 Piece Bed Sheets for Twin Size Bed, Soft and Breathable Microfiber, Includes 1 Fitted Sheet, 1 Flat Sheet and 1 Pillowcase (Burgundy)", deal_url: "https://tinyurl.com/2y6qrqu3", image_url: "https://m.media-amazon.com/images/I/61QWqFSk88L._AC_SY879_.jpg", price: 14.24, original_price: 18.99 },
{ id: 58, title: "Utopia Bedding Twin Bed Sheets Set - 3 Piece Bedding - Brushed Microfiber - Shrinkage and Fade Resistant - Easy Care (Twin, Brown)", deal_url: "https://tinyurl.com/2ysf8pnj", image_url: "https://m.media-amazon.com/images/I/612xSqbXhfL._AC_SY879_.jpg", price: 14.24, original_price: 18.99 },
{ id: 59, title: "Bedsure Deep Beige Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/25yy7tqz", image_url: "https://m.media-amazon.com/images/I/81j6maJu+KL._AC_SX679_.jpg", price: 24.69, original_price: 39.82 },
{ id: 60, title: "Bedsure Brown Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/2bt7zy9c", image_url: "https://m.media-amazon.com/images/I/81PP0+XonTL._AC_SX679_.jpg", price: 27.99, original_price: 39.99 },
{ id: 61, title: "Ultra Pain Relief Cooling Pillow for Neck Support, Adjustable Cervical Pillow Cozy Sleeping, Odorless Ergonomic Contour Memory Foam Pillows, Orthopedic Bed Pillow for Side Back Stomach Sleeper", deal_url: "https://tinyurl.com/28dgfcpu", image_url: "https://m.media-amazon.com/images/I/71-YG69yFGL._AC_SX679_.jpg", price: 35.98, original_price: 59.97 },
{ id: 62, title: "Ultra Pain Relief Cooling Pillow for Neck Support, Adjustable Cervical Pillow Cozy Sleeping, Odorless Ergonomic Contour Memory Foam Pillows, Orthopedic Bed Pillow for Side Back Stomach Sleeper", deal_url: "https://tinyurl.com/2xh7fkaz", image_url: "https://m.media-amazon.com/images/I/71ky-UHR8bL._AC_SX679_.jpg", price: 35.98, original_price: 59.97 },
{ id: 63, title: "Bedsure Bright White Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/2b8fvrm5", image_url: "https://m.media-amazon.com/images/I/81pq3AhZGPL._AC_SX679_.jpg", price: 27.99, original_price: 39.99 },
{ id: 64, title: "Utopia Bedding Full Sheet Set – 4 Piece Bed Sheets for Full Size Bed, Soft and Breathable Microfiber, Includes 1 Fitted Sheet, 1 Flat Sheet and 2 Pillowcases (Coral)", deal_url: "https://tinyurl.com/29y95ywu", image_url: "https://m.media-amazon.com/images/I/71Tu+c14nsL._AC_SX679_.jpg", price: 18.99, original_price: 27.13 },
{ id: 65, title: "Safety 1st Grow and Go All-in-One Slim Convertible Car Seat, Rear Facing, 5-40 lbs, Forward Facing (30–65 lbs), High Back Booster Seat 40-100 pounds, Black Phantom", deal_url: "https://tinyurl.com/2bl9cws6", image_url: "https://m.media-amazon.com/images/I/71W2eNZFpbL._SX425_.jpg", price: 127.99, original_price: 170.65 },
{ id: 66, title: "kelamayi Upgrade Broom and Dustpan Set, Self-Cleaning with Dustpan Teeth, Indoor&Outdoor Sweeping, Ideal for Dog Cat Pets Home Use, Stand Up Broom and Dustpan (Gray&Orange)", deal_url: "https://tinyurl.com/2xquwn7y", image_url: "https://m.media-amazon.com/images/I/61zELlfqTPL._AC_SX569_.jpg", price: 18.83, original_price: 26.15 }

];

// --- Helpers ------------------------------------------------------------
const formatMoney = (n) => `$${Number(n).toFixed(2)}`;
const discountPct = (deal) => {
  if (!deal.original_price || !deal.price) return null;
  return Math.round(100 - (deal.price / deal.original_price) * 100);
};
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 120);

// Precompute slugs once for stable URLs
const dealsWithSlugs = deals.map((d) => ({ ...d, slug: slugify(d.title) }));

const getDealById = (id) => dealsWithSlugs.find((d) => String(d.id) === String(id));

// --- UI Components ------------------------------------------------------
function DealCard({ deal }) {
  const pct = discountPct(deal);
  return (
    <div
      style={{
        margin: '20px',
        padding: '15px',
        border: '1px solid #eee',
        borderRadius: '12px',
        width: '280px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Link to={`/deal/${deal.id}/${deal.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img
          src={deal.image_url}
          alt={deal.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '10px'
          }}
        />
        <h3 style={{ fontSize: '16px', marginBottom: '6px', lineHeight: 1.25 }}>{deal.title}</h3>
      </Link>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
        {deal.original_price && (
          <span style={{ textDecoration: 'line-through', color: '#888' }}>{formatMoney(deal.original_price)}</span>
        )}
        {deal.price && (
          <span style={{ fontWeight: 800 }}>{formatMoney(deal.price)}</span>
        )}
        {pct ? (
          <span style={{ marginLeft: 'auto', fontSize: 12, color: '#0a7c2f', fontWeight: 700 }}>-{pct}%</span>
        ) : null}
      </div>

      <div style={{ display: 'flex' }}>
        <Link
          to={`/deal/${deal.id}/${deal.slug}`}
          style={{
            flex: 1,
            textAlign: 'center',
            padding: '10px 14px',
            background: '#0a7c2f',
            color: '#fff',
            borderRadius: '8px',
            fontWeight: 700,
            textDecoration: 'none'
          }}
        >
          View
        </Link>
      </div>
    </div>
  );
}

function DealGrid() {
  return (
    <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {dealsWithSlugs.map((d) => (
        <DealCard key={d.id} deal={d} />
      ))}
    </main>
  );
}

function DealDetail() {
  const { id, slug } = useParams();
  const deal = getDealById(id);

  if (!deal) return <NotFound />;

  const canonical = `/deal/${deal.id}/${deal.slug}`;
  if (slug !== deal.slug) {
    return <Navigate to={canonical} replace />;
  }

  const pct = discountPct(deal);

  return (
    <div style={{ padding: 20, maxWidth: 980, margin: '0 auto' }}>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#0a7c2f', fontWeight: 700 }}>← All Deals</Link>
      </nav>

      <article style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 24 }}>
        <div>
          <img
            src={deal.image_url}
            alt={deal.title}
            loading="eager"
            style={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: 12, border: '1px solid #eee' }}
          />
        </div>
        <div>
          <h1 style={{ fontSize: 26, lineHeight: 1.2, marginBottom: 12 }}>{deal.title}</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            {deal.original_price && (
              <span style={{ textDecoration: 'line-through', color: '#888' }}>{formatMoney(deal.original_price)}</span>
            )}
            {deal.price && <span style={{ fontSize: 22, fontWeight: 900 }}>{formatMoney(deal.price)}</span>}
            {pct ? <span style={{ color: '#0a7c2f', fontWeight: 800 }}>Save {pct}%</span> : null}
          </div>

          <p style={{ fontSize: 14, color: '#374151', marginBottom: 14 }}>
            We may earn commission from affiliate links. Thanks for supporting Thinkcart.
          </p>

          <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
            <a
              href={deal.deal_url}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              style={{
                padding: '12px 16px',
                background: '#0a7c2f',
                color: '#fff',
                borderRadius: 10,
                fontWeight: 800,
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Go to Deal
            </a>
            <ShareButtons deal={deal} />
          </div>
        </div>
      </article>

      <hr style={{ margin: '28px 0', border: 0, borderTop: '1px solid #e5e7eb' }} />

      <section>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>More deals you might like</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {dealsWithSlugs
            .filter((d) => d.id !== deal.id)
            .slice(0, 6)
            .map((d) => (
              <div key={d.id} style={{ width: 220 }}>
                <Link to={`/deal/${d.id}/${d.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img src={d.image_url} alt={d.title} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 10, border: '1px solid #eee' }} />
                  <div style={{ fontSize: 13, marginTop: 6, lineHeight: 1.3 }}>{d.title}</div>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

function ShareButtons({ deal }) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const text = encodeURIComponent(`${deal.title} — ${formatMoney(deal.price)} on Thinkcart`);
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        style={btnGhost}
      >
        Share X
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={btnGhost}
      >
        Share FB
      </a>
      <button onClick={() => navigator.clipboard.writeText(shareUrl)} style={btnGhost}>
        Copy Link
      </button>
    </div>
  );
}

const btnGhost = {
  padding: '12px 14px',
  background: '#f3f4f6',
  color: '#111827',
  borderRadius: 10,
  fontWeight: 800,
  border: '1px solid #e5e7eb',
  cursor: 'pointer'
};

function Header() {
  return (
    <header style={{ textAlign: 'center', marginBottom: 30 }}>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        <h1 style={{ fontSize: 32, marginBottom: 6 }}>Thinkcart</h1>
      </Link>
      <p style={{ fontSize: 13, color: '#6b7280' }}>Fresh deals. One click away.</p>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: 'center', marginTop: 40, fontSize: 12, color: '#555' }}>
      © {new Date().getFullYear()} Thinkcart.ai
      <br />
      We may earn commission from affiliate links. We appreciate your support!
    </footer>
  );
}

function NotFound() {
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>404</h1>
      <p>Sorry, we couldn't find that deal.</p>
      <Link to="/" style={{ color: '#0a7c2f', fontWeight: 700 }}>Return to all deals</Link>
    </div>
  );
}

// --- App Shell with Router ---------------------------------------------
export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<DealGrid />} />
          <Route path="/deal/:id/:slug" element={<DealDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
