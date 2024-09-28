function createHead() {
    // Title Tag
    document.title = 'Apna Notes - Your Source for Student Notes';

    // Charset Meta Tag
    var metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    document.head.appendChild(metaCharset);

    // Viewport Meta Tag for Responsive Design
    var metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(metaViewport);

    // Meta Description Tag for SEO
    var metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Apna Notes offers a wide range of ipu notes and resources for students, helping them excel in their studies.';
    document.head.appendChild(metaDescription);

    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://apnanotes.xyz",
      "logo": "https://apnanotes.xyz/img/favicon.png",
      "name": "Apna Notes",
      "sameAs": [
        "https://www.instagram.com/yourprofile",
        "https://www.facebook.com/yourpage"
      ]
    });

    document.head.appendChild(script);


    // Open Graph Meta Tags
    var ogTags = [
        { property: 'og:title', content: 'Apna Notes - Your Source for Student IPU Notes' },
        { property: 'og:description', content: 'Apna Notes offers a wide range of notes and resources for students, helping them excel in their studies.' },
        { property: 'og:image', content: '/img/favicon.png' },  
        { property: 'og:url', content: 'https://apnanotes.xyz' },
        { property: 'og:type', content: 'website' }
    ];

    ogTags.forEach(tag => {
        var metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        metaTag.content = tag.content;
        document.head.appendChild(metaTag);
    });

    // Google AdSense Meta Tag
    var adsenseMeta = document.createElement('meta');
    adsenseMeta.name = 'google-adsense-account';
    adsenseMeta.content = 'ca-pub-5341243893712251';
    document.head.appendChild(adsenseMeta);

    // Favicon
    var favicon = document.createElement('link');
    favicon.rel = 'shortcut icon';
    favicon.href = '/img/favicon.png';
    favicon.type = 'image/x-icon';
    document.head.appendChild(favicon);

    // CSS Links
    var cssLinks = [
        { href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css', rel: 'stylesheet' },
        { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css', rel: 'stylesheet' },
        { href: '/styles/style.css', rel: 'stylesheet' },
        { href: '/notes/CSE/substyle.css', rel: 'stylesheet' }
    ];

    cssLinks.forEach(link => {
        var linkTag = document.createElement('link');
        linkTag.rel = link.rel;
        linkTag.href = link.href;
        document.head.appendChild(linkTag);
    });

    // JS Scripts
    var scripts = [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', async: false },
        { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5341243893712251', async: true, crossOrigin: 'anonymous' },
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-K4X10JCZS8', async: true }
    ];

    scripts.forEach(script => {
        var scriptTag = document.createElement('script');
        scriptTag.src = script.src;
        if (script.async) scriptTag.async = script.async;
        if (script.crossOrigin) scriptTag.crossOrigin = script.crossOrigin;
        document.head.appendChild(scriptTag);
    });

    // Inline Google Tag Manager Initialization Script
    var gtagInline = document.createElement('script');
    gtagInline.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-K4X10JCZS8');
    `;
    document.head.appendChild(gtagInline);

    // Robots Meta Tag
    var metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'index, follow';
    document.head.appendChild(metaRobots);

    // Canonical Link
    var canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = 'https://apnanotes.xyz';
    document.head.appendChild(canonicalLink);
}

// Call the function to create the head section
createHead();
// // Show content after a brief delay to ensure CSS is loaded
// setTimeout(showContent, 50);



// Create the header element
const header = document.createElement('header');
header.className = 'border-bottom border-body';

// Create the nav element
const nav = document.createElement('nav');
nav.className = 'navbar navbar-expand-sm bg-light navbar-light sticky-top';

// Container fluid div
const containerFluid = document.createElement('div');
containerFluid.className = 'container-fluid';

// Navbar brand link
const navbarBrand = document.createElement('a');
navbarBrand.className = 'navbar-brand text-danger';
navbarBrand.href = '#';
navbarBrand.innerHTML = 'APNA-<span class="text-primary"><i>NOTES</i></span>';

// Navbar toggler button
const navbarToggler = document.createElement('button');
navbarToggler.className = 'bg-danger navbar-toggler';
navbarToggler.type = 'button';
navbarToggler.setAttribute('data-bs-toggle', 'collapse');
navbarToggler.setAttribute('data-bs-target', '#collapsibleNavbar');

const togglerIcon = document.createElement('span');
togglerIcon.className = 'navbar-toggler-icon';
navbarToggler.appendChild(togglerIcon);

// Collapsible div for navbar links
const collapseDiv = document.createElement('div');
collapseDiv.className = 'collapse navbar-collapse';
collapseDiv.id = 'collapsibleNavbar';

// Navbar links
const navItems = [
    { href: '/', text: 'Home' },
    { href: '/#about', text: 'About' },
    { href: '/pages/contact.html', text: 'Contact' },
    { href: '/pages/ipusyllabus.html', text: 'Ipu Syllabus' }
];

const ul = document.createElement('ul');
ul.className = 'navbar-nav';

navItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'nav-item';

    const a = document.createElement('a');
    a.className = 'nav-link text-dark';
    a.href = item.href;
    a.textContent = item.text;

    li.appendChild(a);
    ul.appendChild(li);
});

collapseDiv.appendChild(ul);

// Append all elements to the header
containerFluid.appendChild(navbarBrand);
containerFluid.appendChild(navbarToggler);
containerFluid.appendChild(collapseDiv);
nav.appendChild(containerFluid);
header.appendChild(nav);

// Append the header to the body
document.body.prepend(header);

// Add the sticky CSS using JavaScript
const style = document.createElement('style');
style.textContent = `
    header {
        position: sticky;
        top: 0;
        z-index: 1;
    }
`;
document.head.appendChild(style);

//subjects start

//subject end

function submitFormBtech() {
    const branch = document.getElementById('branchSelect').value;
    const semester = document.getElementById('semesterSelect').value;

    if (branch && semester) {
        // Construct the URL based on the selected branch and semester
        const url = `/notes/${branch}/${semester}.html`;
        
        // Set the form action to the constructed URL
        document.getElementById('selectionForm').action = url;
        
        // Submit the form
        document.getElementById('selectionForm').submit();
    } else {
        alert('Please select both branch and semester.');
    }
}
function submitFormBca() {
    // const branch = document.getElementById('branchSelect').value;
    const semester = document.getElementById('semesterSelectBca').value;

    if (semester) {
        // Construct the URL based on the selected branch and semester
        const url = `/notes/BCA/${semester}.html`;
        
        // Set the form action to the constructed URL
        document.getElementById('selectionFormBCA').action = url;
        
        // Submit the form
        document.getElementById('selectionFormBCA').submit();
    } else {
        // console.log(semester)
        alert('Please select semester.');
    }
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.setAttribute('data-bs-theme', 'light');
    footer.className = "text-bg-light p-3"
    // Create the footer element
    const footerDiv = document.createElement('footer');
    footerDiv.setAttribute('data-bs-theme', 'light');
    footerDiv.className = 'text-bg-light d-flex justify-content-centerflex-wrap';

    // Container fluid
    const containerFluid = document.createElement('div');
    containerFluid.className = 'container-fluid p-3 d-flex justify-content-center mt-3 flex-row';

    // Inner container
    const container = document.createElement('div');
    container.className = 'container d-flex justify-content-center flex-column';

    // Logo and description
    const logo = document.createElement('img');
    logo.src = '/img/logo.jpeg';
    logo.alt = '';
    logo.width = 150;
    logo.className = 'logo';

    const description = document.createElement('p');
    description.textContent = 'Notes/Solution to all your class needs. Free study material, Video Playlist and more...';

    // Append logo and description to the container
    container.appendChild(logo);
    container.appendChild(description);

    // Append the container to the containerFluid
    containerFluid.appendChild(container);

    // Quick Links
    const quickLinksContainer = document.createElement('div');
    quickLinksContainer.className = 'container mt-3';

    const quickLinksHeading = document.createElement('h3');
    quickLinksHeading.textContent = 'Quick links';

    const quickLinksList = document.createElement('ul');

    const links = [
        { href: '/index.html', text: 'Home' },
        { href: '/#about', text: 'About' },
        { href: '/pages/privacy-policy.html', text: 'Privacy Policy' },
        { href: '/pages/terms-condition.html', text: 'Terms&Conditions' },
        { href: '/pages/ipusyllabus.html', text: 'Ipu Syllabus' },
    ];

    links.forEach(link => {
        const listItem = document.createElement('a');
        listItem.href = link.href;
        listItem.className = 'list-group-item list-group-item-action';
        listItem.textContent = link.text;
        quickLinksList.appendChild(listItem);
    });

    quickLinksContainer.appendChild(quickLinksHeading);
    quickLinksContainer.appendChild(quickLinksList);

    // Contact
    const contactContainer = document.createElement('div');
    contactContainer.className = 'container mt-3';

    const contactHeading = document.createElement('h3');
    contactHeading.textContent = 'Contact';

    //contact form
    const contactForm = document.createElement('a');
    contactForm.href = '/pages/contact.html';
    contactForm.className = 'footer-mail text-decoration-none text-body d-block ms-5';
    contactForm.textContent = 'Contact-Us';

    const contactParagraph = document.createElement('p');
    const mailIcon = document.createElement('i');
    mailIcon.className = 'fa fa-envelope me-3';

    const contactLink = document.createElement('a');
    contactLink.href = 'mailto:info@apnanotes.xyz?subject=Subject%20of%20the%20Email&body=Body%20of%20the%20Email';
    contactLink.className = 'footer-mail text-decoration-none text-body';
    contactLink.textContent = 'info@apnanotes.xyz';

    contactParagraph.appendChild(mailIcon);
    contactParagraph.appendChild(contactLink);
    contactContainer.appendChild(contactHeading);
    contactContainer.appendChild(contactParagraph);
    contactParagraph.appendChild(contactForm);

    // Disclaimer and copyright
    const disclaimer = document.createElement('p');
    disclaimer.className = 'text-secondary';
    disclaimer.textContent = 'Disclaimer: All the books study resources and content hosted on Apna Notes are provided for informational and educational purposes only. We do not own any of the resources available on the site.';

    const copyright = document.createElement('div');
    copyright.className = 'text-secondary text-center';
    copyright.innerHTML = '2023-2024 Apna-Notes. <a href="#">Developed by Noyau</a>';

    // Append everything to the footer
    footerDiv.appendChild(containerFluid);
    footerDiv.appendChild(quickLinksContainer);
    footerDiv.appendChild(contactContainer);
    footer.appendChild(footerDiv)
    footer.appendChild(disclaimer);
    footer.appendChild(copyright);

    // Finally, append the footer to the body
    document.body.appendChild(footer);

    // Add the responsive CSS using JavaScript
    const style = document.createElement('style');
    style.textContent = `
        footer{
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            
            
            
        }
        
        @media screen and (max-width: 768px) {
            footer .container-fluid {
                flex-wrap: wrap;
            }
        }
    `;
    document.head.appendChild(style);
}

// Call the function to create and insert the footer
createFooter();
