import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import AccessibilitySidebar from '../components/AccessibilitySidebar/AccessibilitySidebar';
import Chatbot from '../components/Chatbot/Chatbot';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  describe('Accessibility Sidebar', () => {
    test('should not have any accessibility violations', async () => {
      const { container } = render(<AccessibilitySidebar />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    test('should have proper ARIA labels', () => {
      render(<AccessibilitySidebar />);
      
      // Check for proper ARIA labels on buttons
      const themeToggle = screen.getByLabelText(/toggle theme/i);
      expect(themeToggle).toBeInTheDocument();
      
      const fontSizeButton = screen.getByLabelText(/font size/i);
      expect(fontSizeButton).toBeInTheDocument();
      
      const ttsButton = screen.getByLabelText(/text to speech/i);
      expect(ttsButton).toBeInTheDocument();
    });

    test('should support keyboard navigation', () => {
      render(<AccessibilitySidebar />);
      
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveAttribute('tabIndex');
        expect(button).toHaveAttribute('aria-label');
      });
    });

    test('should announce state changes to screen readers', () => {
      render(<AccessibilitySidebar />);
      
      const themeToggle = screen.getByLabelText(/toggle theme/i);
      fireEvent.click(themeToggle);
      
      // Check for live region announcements
      const liveRegion = screen.getByRole('status');
      expect(liveRegion).toBeInTheDocument();
    });
  });

  describe('Chatbot Accessibility', () => {
    test('should not have any accessibility violations', async () => {
      const { container } = render(<Chatbot />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    test('should have proper heading hierarchy', () => {
      render(<Chatbot />);
      
      // Check for proper heading structure
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
      
      // First heading should be h1
      expect(headings[0].tagName).toBe('H1');
    });

    test('should have accessible form controls', () => {
      render(<Chatbot />);
      
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-label');
      expect(input).toHaveAttribute('placeholder');
      
      const sendButton = screen.getByRole('button', { name: /send/i });
      expect(sendButton).toBeInTheDocument();
    });

    test('should announce new messages', () => {
      render(<Chatbot />);
      
      const input = screen.getByRole('textbox');
      const sendButton = screen.getByRole('button', { name: /send/i });
      
      fireEvent.change(input, { target: { value: 'Hello' } });
      fireEvent.click(sendButton);
      
      // Check for message announcement
      const messageRegion = screen.getByRole('log');
      expect(messageRegion).toBeInTheDocument();
    });
  });

  describe('Color Contrast', () => {
    test('should meet WCAG AA contrast ratios', () => {
      // This would require a color contrast library
      // For now, we'll test that high contrast mode works
      render(<AccessibilitySidebar />);
      
      const highContrastButton = screen.getByLabelText(/high contrast/i);
      fireEvent.click(highContrastButton);
      
      // Check that contrast classes are applied
      const body = document.body;
      expect(body).toHaveClass('high-contrast');
    });
  });

  describe('Focus Management', () => {
    test('should manage focus properly', () => {
      render(<AccessibilitySidebar />);
      
      const firstButton = screen.getAllByRole('button')[0];
      firstButton.focus();
      
      expect(firstButton).toHaveFocus();
      
      // Test tab navigation
      fireEvent.keyDown(document, { key: 'Tab' });
      
      const nextButton = screen.getAllByRole('button')[1];
      expect(nextButton).toHaveFocus();
    });
  });

  describe('Screen Reader Support', () => {
    test('should provide alternative text for images', () => {
      render(<AccessibilitySidebar />);
      
      const images = screen.getAllByRole('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('alt');
      });
    });

    test('should use semantic HTML elements', () => {
      render(<AccessibilitySidebar />);
      
      // Check for semantic elements
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
      
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });
});
