# SavvyTech List Management System

A modern React-based user management system with Persian/Farsi language support, built with TypeScript, Redux Toolkit, and AG Grid.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-19.1.1-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.9.3-blue.svg)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Components](#components)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Utilities](#utilities)
- [Styling](#styling)
- [Form Validation](#form-validation)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

SavvyTech List Management is a full-featured user management application with CRUD operations, built specifically for Persian-speaking users. The application features a modern dashboard layout, data grid with sorting/filtering, and comprehensive form validation.

### Key Highlights

- ✅ Complete CRUD operations for user management
- ✅ Persian/Farsi language interface
- ✅ Jalali (Persian) calendar integration
- ✅ Real-time form validation
- ✅ Responsive design (mobile-first)
- ✅ Toast notifications for user feedback
- ✅ Professional data grid with AG Grid
- ✅ Redux Toolkit for state management
- ✅ TypeScript for type safety

## ✨ Features

### User Management

- **Create Users**: Add new users with validated forms
- **Edit Users**: Update existing user information
- **Delete Users**: Remove users with confirmation dialog
- **List Users**: View all users in a sortable/filterable table

### UI Components

- **Dashboard Layout**: Sidebar navigation with breadcrumbs
- **Data Grid**: Professional table with custom cell renderers
- **Modal System**: Reusable modals for forms and confirmations
- **Toast Notifications**: Success/error feedback messages
- **Loading States**: Skeleton loaders and spinners
- **Empty States**: Friendly messages for empty data

### Data Features

- **Persian Number Conversion**: Auto-convert Persian/Arabic numerals
- **Price Formatting**: Thousand separators (123,456,789 ریال)
- **Phone Validation**: Iranian mobile number format
- **Date Formatting**: Jalali calendar display (1403/08/10)
- **Form Validation**: Real-time validation with Persian error messages

## 🛠️ Tech Stack

### Core

- **React** 19.1.1 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 7.1.7 - Build tool & dev server

### State Management

- **Redux Toolkit** 2.9.2 - State management
- **RTK Query** - API integration & caching

### UI & Styling

- **Tailwind CSS** 3.3.2 - Utility-first CSS
- **Styled Components** 6.1.19 - CSS-in-JS
- **AG Grid** 28.0.2 - Data grid
- **React Toastify** 11.0.5 - Toast notifications

### Forms & Validation

- **Formik** 2.4.6 - Form management
- **Yup** 1.7.1 - Schema validation

### Persian/Farsi Support

- **jalali-moment** 3.3.11 - Jalali calendar
- **@persian-tools/persian-tools** 4.0.4 - Persian utilities

### Routing

- **React Router DOM** 7.1.1 - Client-side routing
- **use-react-router-breadcrumbs** 4.0.1 - Breadcrumb navigation

### Other

- **React Helmet Async** 2.0.5 - Meta tags management

## 📁 Project Structure

```
savvytech-list-management/
├── public/
│   ├── assets/           # Static assets (images, etc.)
│   ├── fonts/            # IRANSans font files
│   └── fontIcons/        # Custom icon fonts
│
├── src/
│   ├── App/
│   │   ├── index.tsx              # Main App component
│   │   ├── routes.ts              # Route configuration
│   │   ├── index.css              # Global styles
│   │   └── ReactToastify.css      # Toast notification styles
│   │
│   ├── components/
│   │   ├── button/                # Button component with variants
│   │   │   ├── index.tsx
│   │   │   ├── style.ts
│   │   │   └── skeleton/
│   │   ├── card/                  # Card container component
│   │   │   ├── index.tsx
│   │   │   ├── body/
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── closeableArea/         # Modal backdrop
│   │   ├── form/                  # Form controls
│   │   │   ├── index.tsx
│   │   │   ├── components/
│   │   │   │   └── input/         # Input component
│   │   │   └── skeletonFormField/
│   │   ├── loading/               # Full-screen loader
│   │   ├── metaTag/               # SEO meta tags
│   │   ├── modal/                 # Modal system
│   │   │   ├── modal.tsx
│   │   │   ├── header.tsx
│   │   │   ├── body.tsx
│   │   │   ├── footer.tsx
│   │   │   └── style.ts
│   │   ├── spinner/               # Loading spinner
│   │   ├── table/                 # AG Grid wrapper
│   │   │   ├── index.tsx
│   │   │   ├── GlobalAgGridStyle.css
│   │   │   ├── emptyState/
│   │   │   └── skeletonTable/
│   │   └── tableIcon/             # Table action icons
│   │
│   ├── constants/
│   │   └── styleVariables.ts      # Design tokens & theme
│   │
│   ├── layout/
│   │   ├── index.tsx              # Main layout wrapper
│   │   ├── breadcrumbs/           # Breadcrumb navigation
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   └── sidebar/               # Sidebar navigation
│   │       ├── index.tsx
│   │       └── mockData.json
│   │
│   ├── pages/
│   │   ├── dashboard/             # Dashboard page
│   │   │   └── index.tsx
│   │   └── users/                 # User management
│   │       ├── index.tsx
│   │       ├── grid/              # Users table
│   │       ├── addEditModal/      # Create/Edit form
│   │       │   ├── form.tsx
│   │       │   ├── index.hook.ts
│   │       │   ├── initialValues.ts
│   │       │   └── validation.ts
│   │       └── deleteModal/       # Delete confirmation
│   │
│   ├── store/
│   │   ├── index.ts               # Store configuration
│   │   ├── reducers/
│   │   │   └── modal.ts           # Modal state slice
│   │   └── services/
│   │       └── users.ts           # Users API service
│   │
│   ├── utils/
│   │   ├── convert-json-to-query-string.ts
│   │   ├── date-formatter.ts
│   │   ├── get-user-name.ts
│   │   ├── handle-mutation-toast.ts
│   │   ├── persian-num-to-english.ts
│   │   ├── success-message.ts
│   │   └── use-window-size.ts
│   │
│   ├── main.tsx                   # App entry point
│   └── reportWebVitals.ts         # Performance monitoring
│
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/yourusername/savvytech-list-management.git
   cd savvytech-list-management
```

2. **Install dependencies**

```bash
   npm install
   # or
   yarn install
```

3. **Start development server**

```bash
   npm run dev
   # or
   yarn dev
```

4. **Open browser**

```
   http://localhost:5173
```

### Build for Production

```bash
npm run build
# or
yarn build
```

Preview production build:

```bash
npm run preview
# or
yarn preview
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## 🏗️ Architecture

### Design Patterns

- **Component-Based Architecture**: Modular, reusable components
- **Container/Presentational Pattern**: Separation of logic and UI
- **Custom Hooks**: Reusable stateful logic
- **Redux Toolkit Pattern**: Slice-based state management
- **RTK Query**: API integration with caching

### Code Organization

```
Component Structure:
├── Component/
│   ├── index.tsx           # Main component
│   ├── style.ts            # Styled components
│   ├── index.hook.ts       # Custom hooks (optional)
│   └── SubComponent/       # Sub-components
```

### State Management Flow

```
User Action → Component → Redux Action → RTK Query → API
                ↓                                      ↓
            Local State ← Redux Store ← Cache ← Response
```

## 🧩 Components

### Core Components

#### Button

Multi-variant button with loading states and icons.

```tsx
ذخیره;
```

**Props:**

- `color`: primary | secondary | danger | primary-outline | etc.
- `size`: sm | md | lg | sm-wide | md-wide | lg-wide
- `loading`: boolean
- `disabled`: boolean
- `leftIcon/rightIcon`: icon class name
- `type`: button | submit | reset

#### Card

Container component with header, body, and footer sections.

```tsx


    عنوان کارت


    محتوای کارت


    ذخیره


```

#### Modal

Flexible modal system with multiple types.

```tsx

  عنوان مودال
  محتوای مودال

    تایید


```

**Types:**

- `normal`: Standard modal with primary color
- `delete`: Danger modal with red accent

**Sizes:**

- `sm`: 300px
- `md`: 500px
- `lg`: 800px
- `xl`: 960px
- `full-width`: 100%

#### Form Input

Form control with validation and variants.

```tsx

```

**Features:**

- Formik integration
- Real-time validation
- Loading skeleton
- Persian error messages
- Auto-focus management

#### Table

AG Grid wrapper with custom styling.

```tsx

```

**Features:**

- Sorting & filtering
- Custom cell renderers
- Skeleton loading
- Empty state
- RTL support
- Responsive design

### Layout Components

#### DashboardLayout

Main application layout with sidebar and breadcrumbs.

```tsx

```

**Features:**

- Fixed sidebar (256px)
- Dynamic content area
- Responsive header
- Scroll management

#### Breadcrumbs

Auto-generated navigation from routes.

```tsx
// Automatically renders based on current route
```

**Features:**

- Active route highlighting
- Route descriptions
- Responsive truncation
- Custom separators

#### Sidebar

Navigation menu from JSON configuration.

```tsx
// Configuration in mockData.json
[
  {
    id: 1,
    parentId: 0,
    to: "/",
    name: "داشبورد",
    key: "dashboard",
  },
];
```

## 🗄️ State Management

### Redux Store Structure

```typescript
{
  getUsersApi: {
    queries: {
      'getUsersApi(undefined)': {
        status: 'fulfilled',
        data: [...users]
      }
    },
    mutations: { ... }
  },
  modal: {
    modalName: 'user_add_edit_modal' | 'delete_user' | ''
  }
}
```

### Modal State

```typescript
// Open modal
dispatch(openModal("user_add_edit_modal"));

// Close modal
dispatch(closeModal());

// Check modal state
const { modalName } = useSelector((state) => state.modal);
```

### RTK Query Hooks

```typescript
// Fetch users
const { data, isLoading, refetch } = useGetUsersApiQuery();

// Add user
const [addUser, { isLoading }] = useAddUserApiMutation();
await addUser(userData);

// Update user
const [updateUser] = useUpdateUserApiMutation();
await updateUser({ id, ...userData });

// Delete user
const [deleteUser] = useDeleteUserApiMutation();
await deleteUser(userId);
```

## 🌐 API Integration

### Base Configuration

```typescript
baseURL: "https://6902253db208b24affe53343.mockapi.io/api";
```

### Endpoints

| Method | Endpoint          | Description   |
| ------ | ----------------- | ------------- |
| GET    | `/users/list`     | Get all users |
| POST   | `/users/list`     | Create user   |
| PUT    | `/users/list/:id` | Update user   |
| DELETE | `/users/list/:id` | Delete user   |

### User Model

```typescript
interface User {
  id?: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  companyName: string;
  price: number;
}
```

### Query Parameters

```typescript
interface GetUsersParams {
  page?: number;
  limit?: number;
  search?: string;
}

// Usage
useGetUsersApiQuery({ page: 1, limit: 10 });
```

### Cache Management

- **Tags**: `['Users']` for automatic invalidation
- **Keep Time**: 0 seconds (always fresh)
- **Refetch**: On mutation success
- **Optimistic Updates**: Not implemented (can be added)

## 🔧 Utilities

### Date Formatter

Convert between Gregorian and Jalali calendars.

```typescript
import {
  toDateString,
  toDateObject,
  objectToTimeStamp,
} from "@/utils/date-formatter";

// Format date to Persian
toDateString("2024-11-01"); // "1403/08/10"

// Convert to object
toDateObject("2024-11-01"); // { year: 1403, month: 8, day: 10 }

// Convert object to timestamp
objectToTimeStamp({ year: 1403, month: 8, day: 10 });
```

### Persian Number Converter

Convert Persian/Arabic numerals to English.

```typescript
import PersianNumToEnglish from "@/utils/persian-num-to-english";

PersianNumToEnglish("۱۲۳۴"); // "1234"
PersianNumToEnglish("٠١٢٣"); // "0123"
```

### Price Formatter

Format numbers with thousand separators.

```typescript
import { addCommas, removeCommas } from "@persian-tools/persian-tools";

addCommas("1234567"); // "1,234,567"
removeCommas("1,234,567"); // "1234567"
```

### Query String Builder

Convert objects to URL query strings.

```typescript
import convertJSONToQueryString from "@/utils/convert-json-to-query-string";

const params = { page: 1, limit: 10, search: "test" };
convertJSONToQueryString(params); // "?page=1&limit=10&search=test"
```

### Window Size Hook

Responsive design helper.

```typescript
import useWindowSize from "@/utils/use-window-size";

const [width, height] = useWindowSize();

if (width < 768) {
  // Mobile layout
}
```

### Toast Notifications

Centralized notification system.

```typescript
import { SuccessMassage, ErrorMassage } from "@/utils/success-message";

// Show success
SuccessMassage(); // "عملیات با موفقیت انجام شد"

// Show error
ErrorMassage(); // "عملیات ناموفق"

// With error object
ErrorMassage({
  errors: [{ key: "field", message: "خطا" }],
});
```

## 🎨 Styling

### Design System

#### Colors

```typescript
colors: {
  // Primary
  primary: '#283593',
  primary_variant: '#1A237E',

  // Blues
  blue_900: '#1A237E',
  blue_800: '#283593',
  blue_500: '#3F50B5',
  blue_050: '#E8EAF6',

  // Neutrals
  black_87: 'rgba(0, 0, 0, 0.87)',
  black_60: 'rgba(0, 0, 0, 0.6)',
  black_38: 'rgba(0, 0, 0, 0.38)',
  white: '#ffffff',

  // States
  error: '#B00020',
  surface: '#F5F5F5',
}
```

#### Typography

```typescript
fontSize: {
  h1: '28px',
  h2: '20px',
  h3: '18px',
  h4: '16px',
  h5: '14px',
  h6: '12px',
}

fontWeight: {
  bold: 700,
  medium: 500,
  normal: 400,
}
```

### Tailwind Configuration

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#283593',
      surface: '#F5F5F5',
      error: '#B00020',
      // ... other colors
    }
  }
}
```

### Styled Components

```typescript
import styled from "styled-components";
import variables from "@/constants/styleVariables";

export const StyledButton = styled.button`
  background: ${variables.colors.primary};
  color: ${variables.colors.white};
  font-size: ${variables.fontSize.h5};
  font-weight: ${variables.fontWeight.bold};
`;
```

## ✅ Form Validation

### Validation Schema (Yup)

```typescript
// First Name
firstName: Yup.string()
  .required("نام الزامی است")
  .min(2, "نام باید حداقل 2 حرف باشد")
  .test(
    "not-only-numbers",
    "نام نمی‌تواند فقط عدد باشد",
    (value) => !/^\d+$/.test(value || ""),
  );

// Phone Number
phoneNumber: Yup.string()
  .required("شماره موبایل الزامی است")
  .matches(/^[0-9]{10,15}$/, "شماره موبایل باید 10 رقم باشد");

// Price
price: Yup.mixed()
  .required("قیمت الزامی است")
  .test("only-digits", "قیمت باید فقط شامل اعداد باشد", (value) => {
    const cleaned = removeCommas(String(value));
    return /^\d+$/.test(cleaned);
  });
```

### Form Handling

```typescript
// Initial values
const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  companyName: "",
  price: "",
};

// Submit handler
const formSubmitHandler = (values) => {
  const cleanedValues = {
    ...values,
    price: Number(removeCommas(String(values.price))),
  };

  if (isEditing) {
    updateUserApi(cleanedValues);
  } else {
    addUserApi(cleanedValues);
  }
};

// Formik integration

{
  (formik) => ({
    /* ... */
  });
}
```

### Real-time Formatting

```typescript
// Price input
onChange={(e) => {
  const rawValue = PersianNumToEnglish(e.target.value);
  const noCommas = removeCommas(rawValue);
  const formatted = addCommas(noCommas);
  formik.setFieldValue('price', formatted);
}}

// Phone input
onChange={(e) => {
  formik.setFieldValue(
    'phoneNumber',
    PersianNumToEnglish(e.target.value)
  );
}}
```

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
Base: 0px        /* Mobile */
sm: 430px        /* Small mobile */
md: 576px        /* Large mobile */
lg: 684px        /* Small tablet */
xl: 780px        /* Tablet */
2xl: 1023px      /* Small desktop */
3xl: 1030px      /* Desktop */
```

### Responsive Layout

```tsx
// Layout adjusts based on screen size
{
  /* Sidebar */
}
{
  /* Content */
}
```

### Mobile Optimizations

- **Stacked breadcrumbs**: < 430px
- **Collapsible sidebar**: < 768px
- **Single column forms**: < 768px
- **Horizontal scroll tables**: < 430px
- **Touch-friendly buttons**: 48px min height

## 🧪 Testing

### Test Structure (Recommendation)

```
src/
├── components/
│   └── button/
│       ├── __tests__/
│       │   ├── Button.test.tsx
│       │   └── Button.integration.test.tsx
│       └── index.tsx
```

### Example Test

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button Component', () => {
  it('renders with children', () => {
    render(Click me);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(Click me);
    expect(screen.getByTestId('button-skeleton-loader')).toBeInTheDocument();
  });

  it('calls onClick handler', () => {
    const handleClick = jest.fn();
    render(Click me);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 🔐 Security

### Best Practices Implemented

1. **Input Sanitization**: All inputs validated and sanitized
2. **XSS Prevention**: React's built-in protection
3. **Type Safety**: TypeScript prevents type-related bugs
4. **CSRF Protection**: Consider adding tokens for production
5. **API Keys**: Never commit sensitive data

### Recommendations

```typescript
// Environment variables
VITE_API_BASE_URL=https://api.example.com
VITE_API_KEY=your_api_key_here

// Usage
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

## 🚀 Performance

### Optimizations Implemented

1. **Code Splitting**: Lazy loading pages

```typescript
const Dashboard = React.lazy(() => import("./pages/dashboard"));
```

2. **Memoization**: React.memo for expensive components

```typescript
export default React.memo(Sidebar);
```

3. **Virtualization**: AG Grid virtual scrolling
4. **Bundle Size**: Tree-shaking unused code
5. **Caching**: RTK Query automatic caching

### Performance Metrics

```typescript
// reportWebVitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

reportWebVitals(console.log);
```

## 🌍 Internationalization (i18n)

### Persian Language Support

- **Font**: IRANSans (included in public/fonts)
- **Direction**: RTL (Right-to-Left)
- **Numbers**: Persian numerals with English conversion
- **Calendar**: Jalali (Persian) calendar
- **Error Messages**: All in Persian

### Adding New Languages (Future)

```typescript
// 1. Install i18n library
npm install react-i18next i18next

// 2. Create translation files
src/locales/
├── fa/
│   └── translation.json
└── en/
    └── translation.json

// 3. Configure i18n
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    fa: { translation: faTranslation },
    en: { translation: enTranslation }
  },
  lng: 'fa',
  fallbackLng: 'fa'
});
```

## 🐛 Debugging

### Development Tools

```typescript
// Redux DevTools
// Automatically enabled in development

// React DevTools
// Install browser extension

// Network Inspection
// Use browser DevTools Network tab
```

### Common Issues

1. **Modal not opening**

   - Check Redux state: `modalName` should match
   - Verify `openModal()` is dispatched

2. **Form validation not working**

   - Check Yup schema syntax
   - Verify field names match

3. **Table not loading**

   - Check API response structure
   - Verify `columnDefs` field names

4. **Persian numbers not converting**
   - Ensure `PersianNumToEnglish()` is called
   - Check input `onChange` handler

## 📝 Code Style

### ESLint Configuration

```javascript
// eslint.config.js
export default [
  {
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
```

### Naming Conventions

- **Components**: PascalCase (`UserList.tsx`)
- **Utilities**: camelCase (`dateFormatter.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Interfaces**: PascalCase with `I` prefix (`IUser`)
- **Types**: PascalCase (`UserData`)

### File Naming

```
Components:     index.tsx
Styles:         style.ts
Hooks:          index.hook.ts  or  use[Name].ts
Types:          types.ts  or  index.d.ts
Tests:          [Name].test.tsx
```

## 🤝 Contributing

### Getting Started

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Commit Message Format

Follow Conventional Commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting)
- `refactor`: Code refactoring
- `test`: Tests
- `chore`: Maintenance

**Example:**

```
feat(users): add user export functionality

- Add CSV export button
- Implement export logic
- Add loading state

Closes #123
```

### Code Review Checklist

- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No console.log() in production code
- [ ] TypeScript types defined
- [ ] Responsive design tested
- [ ] Accessibility checked

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
MIT License
Copyright (c) 2024 SavvyTech
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...

## 👥 Authors

- **Your Name** - _Initial work_ - [YourGithub](https://github.com/yourusername)

## 🙏 Acknowledgments

- IRANSans font by [Farhad Sakhaei](http://fontiran.com/)
- Material Design color palette
- AG Grid community
- Redux Toolkit team
- Persian Tools contributors

## 📞 Support

For support, email support@savvytech.com or join our Slack channel.

## 🗺️ Roadmap

### Version 2.0 (Planned)

- [ ] User roles and permissions
- [ ] Advanced filtering and search
- [ ] Bulk operations (import/export)
- [ ] User profile with avatar
- [ ] Activity logs
- [ ] Email notifications
- [ ] Dark mode support
- [ ] Multi-language support (EN)

### Version 1.1 (In Progress)

- [x] User management CRUD
- [x] Responsive design
- [x] Persian language support
- [ ] Unit tests coverage
- [ ] E2E tests
- [ ] Performance optimization

## 📚 Resources

### Documentation

- [React Documentation](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [AG Grid](https://www.ag-grid.com/)
- [Formik](https://formik.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Tutorials

- [RTK Query Tutorial](https://redux-toolkit.js.org/tutorials/rtk-query)
- [TypeScript React](https://www.typescriptlang.org/docs/handbook/react.html)
- [Jalali Moment](https://github.com/jalaali/moment-jalaali

## 🔄 Data Flow

### User Creation FlowUser clicks "Create User"

↓
openModal('user_add_edit_modal')
↓
Modal renders with empty form
↓
User fills form fields
↓
Real-time validation (Formik + Yup)
↓
Persian number conversion
↓
Price formatting (add commas)
↓
User clicks "Save"
↓
formSubmitHandler()
↓
Clean data (remove commas)
↓
addUserApi() mutation
↓
POST /users/list
↓
API Response
↓
Success toast notification
↓
closeModal()
↓
Invalidate Users cache
↓
Auto refetch users list
↓
Table updates with new data

### Update FlowUser clicks Edit icon

↓
setTerminationInfo(userData)
↓
openModal('user_add_edit_modal')
↓
Modal renders with pre-filled form
↓
All fields marked as touched
↓
Price formatted with commas
↓
User modifies fields
↓
Real-time validation
↓
User clicks "Save"
↓
updateUserApi({ id, ...data })
↓
PUT /users/list/:id
↓
Success → close modal → refetch

### Delete FlowUser clicks Delete icon

↓
setTerminationInfo(userData)
↓
openModal('delete_user')
↓
Confirmation modal shows
↓
Display user name + phone
↓
User clicks "Delete"
↓
deleteUserApi(userId)
↓
DELETE /users/list/:id
↓
Success → close modal → refetch

## 🎯 Best Practices

### Component Development

#### 1. Component Structure

```typescript// ✅ Good: Clear separation of concerns
import { useState } from 'react';
import { StyledComponent } from './style';
import type { ComponentProps } from './types';const MyComponent: React.FC<ComponentProps> = ({
data,
onAction
}) => {
const [state, setState] = useState(initialState);const handleAction = () => {
// Business logic
onAction(data);
};return (
<StyledComponent>
{/* JSX */}
</StyledComponent>
);
};export default MyComponent;
```
