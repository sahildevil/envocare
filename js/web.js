
document.addEventListener('DOMContentLoaded', function () {
    // Sample data for the sales graph
    const salesGraphData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Monthly Sales',
            data: [50, 80, 60, 100, 75],
            backgroundColor: '#34a0a4',
            borderColor: '#34a0a4',
            borderWidth: 1
        }]
    };

    // Chart configuration for the sales graph
    const salesGraphOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Create a line chart for the sales graph
    const salesGraphCtx = document.getElementById('salesGraph').getContext('2d');
    const salesGraph = new Chart(salesGraphCtx, {
        type: 'line',
        data: salesGraphData,
        options: salesGraphOptions
    });

    // Sample data for the pie chart
    const pieChartData = {
        labels: ['Home', 'Clothing', 'SkinCare', 'Medicine','Eatables' , 'WomenHygiene'],
        datasets: [{
            data: [10,20,30,20,15,5],
            backgroundColor: ['#d9ed92', '#b5e48c', '#99d98c','#76c893','#52b69a','#34a0a4'],
            borderColor: ['#d9ed92', '#b5e48c', '#99d98c','#76c893','#52b69a','#34a0a4'],
            borderWidth: 1
        }]
    };

    // Chart configuration for the pie chart
    const pieChartOptions = {};

    // Create a pie chart
    const pieChartCtx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieChartCtx, {
        type: 'doughnut',
        data: pieChartData,
        options: pieChartOptions
    });

    // Initialize world map
    am4core.ready(function () {
        // Create map instance
        const worldMap = am4core.create('worldMap', am4maps.MapChart);

        // Set map definition
        worldMap.geodata = am4geodata_worldLow;

        // Set projection
        worldMap.projection = new am4maps.projections.Miller();

        // Create map polygon series
        const polygonSeries = worldMap.series.push(new am4maps.MapPolygonSeries());

        // Exclude Antartica
        polygonSeries.exclude = ['AQ'];

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        const polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = '{name}';
        polygonTemplate.fill = am4core.color('#74B266');

        // Add click event to highlight selected countries
        polygonTemplate.events.on('hit', function (event) {
            event.target.isActive = !event.target.isActive;
        });
    });
});

    
    
    
    document.addEventListener('DOMContentLoaded', function () {
        // Get the button element
        const scrollTopBtn = document.getElementById('scrollTopBtn');

        // Show the button when scrolling beyond a certain point
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        // Function to scroll to the top
        function scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        }

        // Attach the scrollToTop function to the button click event
        scrollTopBtn.addEventListener('click', scrollToTop);
    });


    //get heart filled

    // Get all heart icons
    const heartIcons = document.querySelectorAll('.fa-solid.fa-heart, .fa-regular.fa-heart');

    // Add click event listener to each heart icon
    heartIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            // Toggle between solid and regular hearts on click
            if (icon.classList.contains('fa-solid')) {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            } else {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }

            // Prevent the default behavior (avoid scrolling to the top)
            event.preventDefault();
        });
    });



//takes me to wishlist.html
    document.addEventListener('DOMContentLoaded', function () {
        const heartIcons = document.querySelectorAll('.fa-solid.fa-heart');

        heartIcons.forEach(heartIcon => {
            heartIcon.addEventListener('click', function () {
                // Redirect to wishlist.html
                window.location.href = 'wishlist.html';
            });
        });
    });

//takes me to homepage

    document.addEventListener('DOMContentLoaded', function () {
        const homeIcon = document.querySelector('.fa-solid.fa-house');

        homeIcon.addEventListener('click', function () {
            // Redirect to web.html
            window.location.href = 'index.html';
        });
    });



//takes me to cart page

document.addEventListener('DOMContentLoaded', function () {
    const cartIconback = document.querySelector('.fa-solid.fa-cart-shopping');

    cartIconback.addEventListener('dblclick', function () {
        // Redirect to web.html
        window.location.href = 'cart.html';
    });
});



// //----------MY CART------------------
let cartCount = 0;

function updateCartCount() {
    const quantityElement = document.querySelector('.quantity');
    quantityElement.textContent = cartCount;
}

// function addToCart() {
//     // Your logic to add a product to the cart goes here

//     // Increment the cart count
//     cartCount += 1;

//     // Update the cart count display
//     updateCartCount();
// }

document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtns = document.querySelectorAll('.addToCartBtn');

    addToCartBtns.forEach(function (btn) {
        btn.addEventListener('click', addToCart);
    });
});





















