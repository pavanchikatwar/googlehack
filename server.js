const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const productRoutes = require('./routes/product');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/googlehack', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/product', productRoutes);

// Route to render HTML files from the views directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'forgot-password.html'));
});

app.get('/user-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'user-dashboard.html'));
});

app.get('/micro-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'micro-dashboard.html'));
});

app.get('/large-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'large-dashboard.html'));
});

app.get('/investor-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'investor-dashboard.html'));
});

app.get('/about-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about-us.html'));
});

app.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact-us.html'));
});

app.get('/faqs', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'faqs.html'));
});

app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'privacy-policy.html'));
});

app.get('/terms-of-service', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'terms-of-service.html'));
});

app.get('/reviews-ratings', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'reviews-ratings.html'));
});

app.get('/newsletter', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'newsletter.html'));
});

app.get('/micro-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'micro-profile.html'));
});

app.get('/large-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'large-profile.html'));
});

app.get('/investor-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'investor-profile.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
