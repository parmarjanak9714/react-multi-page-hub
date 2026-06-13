 Project Structure & Pages
The application is structured into 5 distinct sections managed through react-router-dom:Home Page (/)The landing gateway of the website, styled with a clean global header (Navbar) and footer.About Us Page (/about)Introduces the company's core mission and values.Implements Nested Routing (<Outlet />) to toggle sub-sections dynamically without full page reloads.Sub-links included:Company: Reveals real-time agency specs.History: Highlights core historical timelines.Hidden Company Profile (/company-profile)A secure, hidden corporate document page.Functionality: It is completely excluded from the global Navbar. It can only be accessed if a user navigates to About -> Company and clicks the verified link, which uses target="_blank" to launch securely in a separate browser tab.Contact Me Page (/contact)A comprehensive, secure user-intake interface.FAQ Page (/faq)An interactive, highly optimized customer self-service center.Users Management Page (/users)A heavy data-manipulation dashboard tracking 10 detailed team profiles.
_______________________________________________________________________________________________________

<!--  Core Features & Functionality -->
1. Robust Form Validation Ecosystem (Contact Page)
Powered entirely by React Hook Form, the contact form completely bypasses slow React states (useState) to capture inputs cleanly through uncontrolled references via the register handler.

. Username & Message: Fixed with custom required empty boundaries. Message is restricted to a maximum threshold (maxLength: 1000).

. Email Pattern Matching: Enforced via Regex validation (/^\S+@\S+$/i) to reject improper strings immediately.

. Secure Password Constraints: Validated dynamically to ensure the text contains a minimum of 6 characters, at least 1 uppercase letter (A-Z), and at least 1 unique symbol (!@#$%^&*).

. File Stream Verification (Image Upload): Binds the file input to strict browser extensions (accept="image/*"). Programmed with automated middleware boundaries ensuring the uploaded file strictly stays under a 2MB sizing threshold.

. Cascading (Dependent) Dropdowns: Links the State select box to the City menu. Utilizing the watch() supervisor, changing a state causes the city dropdown to dynamically map the corresponding array data. Changing the state automatically triggers resetField('city') to wipe previous entries. Selecting "All States" merges the nested matrixes into a single flat array using Object.values().flat().
__________________________________________________________________________________________________________

<!-- 2. State-Driven Custom Accordion (FAQ Page) -->

Smart Single-Open Logic: Controls multiple question rows using a single index value state (useState(null))

Conditional Short-Circuiting: Clicking a closed query binds its loop token (index) to the active state, triggering a re-render. Using conditional evaluation (openQuestion === index && ...), the active answer gate opens while automatically clearing and shutting all other parallel fields. Clicking an already active query resets the layout value back to null.

__________________________________________________________________________________________________________

<!-- 3. Data Manipulation Dashboard (Users Page) -->

Tracks 10 worker matrices containing unique id, name, position, and salary markers.

<!-- . Immutability Safety: Clones the state array into a placeholder pointer (let displayedUsers = [...users]) prior to executing modifications to keep the master dataset pristine. -->

. Live Case-Insensitive Filtering: Features an instantaneous string filter via onChange inputs. It standardizes text casings via .toLowerCase() and maps alignments across the layout using .includes().

. Dynamic Arithmetic Array Sorting: Connects a custom dropdown selection to shorting algorithms:

=> Low to High: Orders metrics through ascending evaluations (a.salary - b.salary).

=> High to Low: Reverses layout distribution through descending adjustments (b.salary - a.salary).

. Component Array Eviction (Delete Feature): Clicking the element selector filters the state hook directly (user.id !== id), wiping the target index from view instantly. Reverting actions or performing a standard browser reload resets hooks to the default initial baseline layout.

_________________________________________________________________________________________________________

<!-- . Tech Stack Used -->

. Frontend Library: React.js (Functional Components & Hooks)

. State Management Hooks: useState, watch, resetField, 

. formStateForm Ecosystem: React Hook 

. FormRouting Architecture: React Router DOM (BrowserRouter, Routes, Route, Link, Outlet)

. Styling Architecture: Custom CSS (Pure element scopes, structural flex/grid positioning, strict pointer hover transitions)
