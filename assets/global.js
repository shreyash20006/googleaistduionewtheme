/**
 * TGPCOP NOTES - Global JavaScript
 * Premium B.Pharmacy Study Materials Theme
 */

// Cart functionality
class CartManager {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateCartCount();
  }

  bindEvents() {
    // Add to cart buttons
    document.addEventListener('click', (e) => {
      if (e.target.closest('.product-card__add-to-cart')) {
        e.preventDefault();
        const button = e.target.closest('.product-card__add-to-cart');
        const variantId = button.dataset.variantId;
        this.addToCart(variantId, button);
      }
    });
  }

  async addToCart(variantId, button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span>Adding...</span>';
    button.disabled = true;

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: variantId,
          quantity: 1
        })
      });

      if (response.ok) {
        button.innerHTML = '<span>✓ Added!</span>';
        this.updateCartCount();
        this.showNotification('Product added to cart!', 'success');
        
        setTimeout(() => {
          button.innerHTML = originalText;
          button.disabled = false;
        }, 2000);
      } else {
        throw new Error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      button.innerHTML = originalText;
      button.disabled = false;
      this.showNotification('Failed to add to cart. Please try again.', 'error');
    }
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      const count = cart.item_count;
      
      const cartCountElements = document.querySelectorAll('#cart-count, #mobile-cart-count');
      cartCountElements.forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'flex' : 'none';
      });
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? 'var(--color-green)' : '#ff3b30'};
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      z-index: 10000;
      animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Initialize cart manager
document.addEventListener('DOMContentLoaded', () => {
  new CartManager();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#!') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Lazy loading images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Add animation classes on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.fade-in-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
};

document.addEventListener('DOMContentLoaded', animateOnScroll);

// Prevent layout shift
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
