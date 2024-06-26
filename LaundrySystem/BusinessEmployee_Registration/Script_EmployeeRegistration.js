/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

document.addEventListener('DOMContentLoaded', function(){
    //Employee Registration Form
    const E_form = document.getElementById('employee_form');
    
    //Section1: class="Employee_Info" id="Section1"
    const Employee_info = document.getElementById('Section1');
    //Profile
    const Employee_pic = document.getElementById('F_Employee');
    const profileIcon = document.getElementById('uploadImage');
    const profilePreview = document.getElementById('profilePreview');
    //Employee Name:
    const Employee_lname = document.getElementById('lname');
    const Employee_fname = document.getElementById('fname');
    const Employee_mname = document.getElementById('mname');
    //Birthday
    const Employee_bday = document.querySelector('[name="EBday"]');
    //Employee Contact
    const E_contact = document.querySelector('[name="E_contact"]');
    const E_email = document.querySelector('[name="E_Email"]');
    //Employee Address
    const Emp_Add = document.querySelector('[name="employee_add"]');
    //Employee Address City/Municipal Select
    const Emp_Muni = document.querySelector('[name="City"]');
    const Emp_Select = document.getElementById('city');
    //Employee Address Barangay Select
    const Emp_Brgy = document.querySelector('[name="brgy"]');
    const Brgy_Select = document.getElementById('e_brgy');
    //Affiliated Laundry Shop
    const Job_shop = document.querySelector('[name="LaundryShop"]');
    const Job_select = document.getElementById('shop');
    //Requirements
    //SSS No. + File
    const SSS_No = document.querySelector('[name="SSS"]');
    const SSS_File = document.getElementById('F_SSS');
    //PhilHealth No. + File
    const PhilH_No = document.querySelector('[name="PHealth"]');
    const PhilH_File = document.getElementById('F_PHealth');
    //Pag-IBIG No. + File
    const PIbig_No = document.querySelector('[name="P_Ibig"]');
    const PIbig_File = document.getElementById('F_PIbig');
    //Condition + Sign + Date
    const Agreement = document.getElementById('agreement');
    const Emp_Sign = document.getElementById('e_sign');
    const Sign_Date = document.querySelector('[name="registration_date"]');
    //Button Section1:
    const next1 = document.querySelector('.next-btn');
    
    //Section 2: class="Account_Info" id="Section2"
    const Account_info = document.getElementById('Section2');
    //Employee Account Info
    const Employee_usernm = document.querySelector('[name="E_username"]');
    const Employee_userps = document.querySelector('[name="E_password"]');
    const Employee_secps = document.querySelector('[name="Esecure_pass"]');
    //Button Section2
    const back2 = document.querySelector('.back-btn2');
    const sub2 = document.querySelector('.sub-btn2');
    
    
    
    
    
    //Functions
    function validateName(input){
        const name = /^[A-Za-z\s]+$/;
        return name.test(input);
    }
    
    function validateNo(input){
        const mobileNo = /^(09|\+639)\d{9}$/;
        return mobileNo.test(input);
    }
    
    function validateEmail(email){
        const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/s;
        return emailPattern.test(email);
    }
    
    function resetOutlineColor(...fields){
        fields.forEach(field => {
            console.log(field);
            field.classList.remove('invalid-input');
        });
    }
    
    function AddBrgy(values) {
        console.log('Adding options:', values);
        values.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            Brgy_Select.appendChild(option);
        });
    }
    
    function validateFileSize(file, maxSizeMB) {
        const maxSizeBytes = maxSizeMB * 1024 * 1024; 
        return file.size <= maxSizeBytes;
    }

    function validateFileType(file, validTypes) {
        if (!file || !file.type) {
            return false;
        }
        return validTypes.includes(file.type);
    }
    
    function displayProfilePicture(input, imgElement) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imgElement.src = e.target.result;
                imgElement.style.display = 'block';
                profileIcon.style.display = 'none';
                
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    function setRegistrationDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();

        var formattedDate = mm + '/' + dd + '/' + yyyy;
        
        Sign_Date.value = formattedDate;
    }
    
    function validateAge(birthdate){
        const today = new Date();
        const dob = new Date(birthdate);
        const age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
    
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            return age - 1;
        }
        return age;
    }
    
    
    
    
    
    
    //Event Listeners
    profileIcon.addEventListener('click', function() {
        Employee_pic.click();
    });

    Employee_pic.addEventListener('change', function() {
        displayProfilePicture(this, profilePreview);
    });
    
    Emp_Sign.addEventListener('change', function() {
        const file = this.files[0];
        const maxFileSizeMB = 2; 
        const validFileTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];

        if (validateFileType(file, validFileTypes) && validateFileSize(file, maxFileSizeMB)) {
            setRegistrationDate();
        } else {
            let errorMessage = 'Invalid file. ';
            if (!validateFileType(file, validFileTypes)) {
                errorMessage += 'Please upload an image (JPEG, PNG, GIF) or a PDF file. ';
            }
            if (!validateFileSize(file, maxFileSizeMB)) {
                errorMessage += `File size should be less than ${maxFileSizeMB}MB.`;
            }
            alert(errorMessage);
        }
    });
    
    
    
    
    
    Emp_Select.addEventListener('change', function(){
        Brgy_Select.innerHTML = '';
        
        const placeholderOption = document.createElement('option');
        placeholderOption.disabled = true; 
        placeholderOption.selected = true;
        placeholderOption.textContent = 'Barangay';
        Brgy_Select.appendChild(placeholderOption);
        
        if (Emp_Select.value === 'Angono'){
            AddBrgy(['Bagumabayan', 'Kalayaan', 'Mahabang Parang', 'Poblacion Ibaba',
                'Poblacion Itaas', 'San Isidro', 'Santo Niño', 'San Pedro', 'San Roque', 
                'San Vicente']);
        }else if(Emp_Select.value === 'Antipolo'){
            AddBrgy(['Bagon Nayon', 'Beverly Hills', 'Calawis', 'Cupang', 'Dalig', 
                'Dela Paz', 'Inarawan', 'Mambugan', 'Mayamot', 'Muntingdilaw', 'San Isidro', 
                'San Jose', 'San Juan', 'San Luis', 'San Roque', 'Santa Cruz']);
        }else if(Emp_Select.value === 'Baras'){
            AddBrgy(['Conception', 'Evangelista', 'Mabini', 'Pinugay', 'Rizal', 'San Jose', 
                'San Juan', 'San Miguel', 'San Salvador', 'Santiago']);
        }else if(Emp_Select.value === 'Binangonan'){
            AddBrgy(['Bangad', 'Batingad', 'Bilibiran', 'Binitagan', 'Bombong', 'Buhangin', 
                'Calumpang', 'Ginoong Sanay', 'Gulod', 'Habatagan', 'Ithan', 'Janosa', 
                'Kalawaan', 'Kalinawan', 'Kasile', 'Kaytome', 'Kinaboogan', 'Kinagatan', 
                'Layuan', 'Libid', 'Libis', 'Limbon-limbon', 'Lunsad', 'Macamot', 'Mahabang Parang', 
                'Malakban', 'Mambog', 'Pag-asa', 'Palangoy', 'Pantok', 'Pila Pila', 'Pinagdilawan', 
                'Pipindan', 'Rayap', 'San Carlos', 'Sapang', 'Tabon', 'Tagpos', 'Tatala', 
                'Tayuman']);
        }else if(Emp_Select.value === 'Cainta'){
            AddBrgy(['San Andres', 'Sto. Domingo', 'San Isidro', 'San Juan', 'Sto. Niño', 
                'San Roque', 'Sta. Rosa']);
        }else if(Emp_Select.value === 'Cardona'){
            AddBrgy(['Balibago', 'Boor', 'Calahan', 'Dalig', 'Del Remedio', 'Iglesia', 
                'Lambac', 'Looc', 'Malanggam-Calubacan', 'Nagsulo', 'Navotas', 'Patunhay', 
                'Real', 'Sampad', 'San Roque', 'Subay', 'Ticulio', 'Tuna']);
        }else if(Emp_Select.value === 'Jalajala'){
            AddBrgy(['Bagumbong', 'Bayugo', 'Lubo', 'Paalaman', 'Pagkaliwanan', 'Palaypay', 
                'Punta', 'Second District', 'Sipsipin', 'Special District', 'Third District']);
        }else if(Emp_Select.value === 'Morong'){
            AddBrgy(['Bombongan', 'Can-Cal-Lan', 'Lagundi', 'Maybancal', 'San Guillermo', 
                'San Jose', 'San Juan', 'San Pedro']);
        }else if(Emp_Select.value === 'Pililla'){
            AddBrgy(['Bagumbayan', 'Halayhayin', 'Hulo', 'Imatong', 'Malaya', 'Niogan', 
                'Quisao', 'Takungan', 'Wawa']);
        }else if(Emp_Select.value === 'Rodriguez'){
            AddBrgy(['Balite', 'Burgos', 'Geronimo', 'Macabud', 'Manggahan', 'Mascap', 'Puray', 
                'Rosario', 'San Isidro', 'San Jose', 'San Rafael']);
        }else if(Emp_Select.value === 'San Mateo'){
            AddBrgy(['Ampid I', 'Ampid II', 'Banaba', 'Dulong Bayan 1', 'Dulong Bayan 2', 
                'Guinayang', 'Guitnang Bayan I', 'Guitnang Bayan II', 'Gulod Malaya', 'Malanday', 
                'Maly', 'Pintong Bocawe', 'Santa Ana', 'Santo Niño', 'Silangan']);
        }else if(Emp_Select.value === 'Tanay'){
            AddBrgy(['Cayabu', 'Cayumbay', 'Daraitan', 'Katipunan-Bayan', 'Kaybuto', 'Laiban', 
                'Magdilay-dilay', 'Mag-Ampon', 'Mamuyao', 'Pinagkamaligan', 'Plaza Aldea', 'Sampaloc', 
                'San Andres', 'San Isidro', 'Santa Inez', 'Santo Niño', 'Tabing Ilog', 'Tandang Kuyo', 
                'Tinucan', 'Wawa']);
        }else if(Emp_Select.value === 'Taytay'){
            AddBrgy(['Dolores', 'Muzon', 'San Isidro', 'San Juan', 'Santa Ana']);
        }else if(Emp_Select.value === 'Teresa'){
            AddBrgy(['Bagumbayan', 'Calumpang Santo Cristo', 'Dalig', 'Dulumbayan', 'May-iba', 
                'Poblacion', 'Prinza', 'San Gabriel', 'San Roque']);
        }
    });
    
    Employee_pic.addEventListener('change', function() {
        const file = this.files[0];
        const validImageTypes = ['image/jpeg', 'image/png'];
        if (validateFileType(file, validImageTypes)) {
            displayProfilePicture(this, document.getElementById('profilePreview'));
        } else {
            alert('Invalid file type. Please select a JPEG or PNG image.');
        }
    });
    
    next1.addEventListener('click', function(){
        event.preventDefault();
        const selected_ct = Emp_Muni.value;
        const selected_brgy = Emp_Brgy.value;
        
        const philHealthNo = PhilH_No.value;
        const philHealthFileInput = document.getElementById('F_PHealth');
        
        const PIbigNo = PIbig_No.value;
        const PIbigFileInput = document.getElementById('F_PIbig');
        
        const age = validateAge(Employee_bday.value);
        let valid = false;
        
        if(Employee_lname.value === '' || !validateName(Employee_lname.value) ||
           Employee_fname.value === '' || !validateName(Employee_fname.value) ||
           (Employee_mname.value !== '' && !validateName(Employee_mname.value)) ||
           !Employee_pic.files || Employee_pic.files.length === 0 || !validateFileSize(Employee_pic.files[0], 2) ||
           !validateFileType(Employee_pic.files[0], ['image/jpeg', 'image/png', 'image/gif']) ||
           selected_ct === null || selected_ct === '' ||
           selected_brgy === null || selected_brgy === '' || selected_brgy === 'Barangay' ||
           E_contact.value === '' || !validateNo(E_contact.value) ||
           E_email.value === '' || !validateEmail(E_email.value) || 
           //Extra Condition for the shop affiliation (To update from DB) insert here
           SSS_No.value === '' || SSS_File.files.length === 0 || !validateFileSize(SSS_File.files[0], 2) ||
           (PhilH_No.value !== '' && (PhilH_File.files.length === 0 || !validateFileSize(PhilH_File.files[0], 2))) ||
           (PIbig_No.value !== '' && (PIbig_File.files.length === 0 || !validateFileSize(PIbig_File.files[0], 2))) ||
           !Agreement.checked || Employee_bday.value === '' || 
           !Emp_Sign.files || Emp_Sign.files.length === 0 || !validateFileSize(Emp_Sign.files[0], 2) ||
           !validateFileType(Emp_Sign.files[0], ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'])){
               
            alert('Please complete the required fields with correct credentials.');
            
            if(!Employee_pic.files || Employee_pic.files.length === 0) {
                profileIcon.classList.add('invalid-input');
            }else{
                const file = Employee_pic.files[0];
                if(!validateFileSize(file, 2)) {
                    profileIcon.classList.add('invalid-input');
                    alert('Please enter a valid image file that is less than 2MB.');
                }else if(!validateFileType(file, ['image/jpeg', 'image/png', 'image/gif'])) {
                    profileIcon.classList.add('invalid-input');
                    alert('Please upload an image file of type: JPEG, PNG, GIF.');
                }else{
                    profileIcon.classList.remove('invalid-input');
                }
            }
            
            if(Employee_lname.value === '' || !validateName(Employee_lname.value)){
               Employee_lname.classList.add('invalid-input');
            }else{
               Employee_lname.classList.remove('invalid-input');
            }
            
            if(Employee_fname.value === '' || !validateName(Employee_fname.value)){
               Employee_fname.classList.add('invalid-input');
            }else{
               Employee_fname.classList.remove('invalid-input');
            }
            
            if(!validateName(Employee_mname.value)){
                Employee_mname.classList.add('invalid-input');
                if(Employee_mname.value === ''){
                    Employee_mname.classList.remove('invalid-input');
                }
            }else{
                Employee_mname.classList.remove('invalid-input');
            }
            
            if(Employee_bday.value === '' || age < 18){
                Employee_bday.classList.add('invalid-input');
            }
            
            if(selected_ct === null || selected_ct === ''){
                Emp_Muni.classList.add('invalid-input');
            }else{
                Emp_Muni.classList.remove('invalid-input');
            }
            
            if(Emp_Add.value === ''){
                Emp_Add.classList.add('invalid-input');
            }else{
                Emp_Add.classList.remove('invalid-input');
            }
           
            if(selected_brgy === null || selected_brgy === '' || selected_brgy === 'Barangay'){
                Emp_Brgy.classList.add('invalid-input');
            }else{
                Emp_Brgy.classList.remove('invalid-input');
            }
               
            if(E_contact.value === '' || !validateNo(E_contact.value)){
                E_contact.classList.add('invalid-input');
            }else{
                E_contact.classList.remove('invalid-input');
            }
           
            if(E_email.value === '' || !validateEmail(E_email.value)){
                E_email.classList.add('invalid-input');
            }else{
                E_email.classList.remove('invalid-input');
            }   
               
            if(SSS_No.value === ''){
                SSS_No.classList.add('invalid-input');
            }else{
                SSS_No.classList.remove('invalid-input');
            }   
               
            if(!SSS_File.files || SSS_File.files.length === 0) {
                SSS_File.classList.add('invalid-input');
            }else{
                const file = SSS_File.files[0];
                if(!validateFileSize(file, 2)) {
                    SSS_File.classList.add('invalid-input');
                    alert('Please enter a valid PDF file that is less than 2MB.');
                }else if(!validateFileType(file, ['application/pdf'])) {
                    SSS_File.classList.add('invalid-input');
                    alert('Please upload a PDF file.');
                }else{
                    SSS_File.classList.remove('invalid-input');
                }
            }   
               
            if(PhilH_No.value !== ''){
                if(!PhilH_File.files || PhilH_File.files.length === 0) {
                    PhilH_File.classList.add('invalid-input');
                }else{
                    const file = PhilH_File.files[0];
                    if(!validateFileSize(file, 2)) {
                        PhilH_File.classList.add('invalid-input');
                        alert('Please enter a valid PDF file that is less than 2MB.');
                    }else if(!validateFileType(file, ['application/pdf'])) {
                        PhilH_File.classList.add('invalid-input');
                        alert('Please upload a PDF file.');
                    }else{
                        PhilH_File.classList.remove('invalid-input');
                    }
                }   
            }
            
            if(PhilH_No.value === ''){
                PhilH_File.classList.remove('invalid-input');
            }
            
            if(PIbig_No.value !== ''){
                if(!PIbig_File.files || PIbig_File.files.length === 0) {
                    PIbig_File.classList.add('invalid-input');
                }else{
                    const file = PIbig_File.files[0];
                    if(!validateFileSize(file, 2)) {
                        PIbig_File.classList.add('invalid-input');
                        alert('Please enter a valid PDF file that is less than 2MB.');
                    }else if(!validateFileType(file, ['application/pdf'])) {
                        PIbig_File.classList.add('invalid-input');
                        alert('Please upload a PDF file.');
                    }else{
                        PIbig_File.classList.remove('invalid-input');
                    }
                }   
            }
            
            if(PIbig_No.value === ''){
                PIbig_File.classList.remove('invalid-input');
            }
            
            if(!Agreement.checked){
                Agreement.classList.add('invalid-input');
            }else{
                Agreement.classList.remove('invalid-input');
            }
            
            if(!Emp_Sign.files || Emp_Sign.files.length === 0) {
                Emp_Sign.classList.add('invalid-input');
            }else{
                const file = Emp_Sign.files[0];
                if(!validateFileSize(file, 2)) {
                    Emp_Sign.classList.add('invalid-input');
                    alert('Please enter a valid image file that is less than 2MB.');
                }else if(!validateFileType(file, ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'])) {
                    Emp_Sign.classList.add('invalid-input');
                    alert('Please upload an image file of type: JPEG, PNG, GIF.');
                }else{
                    setRegistrationDate();
                    Emp_Sign.classList.remove('invalid-input');
                }
            }
            
        }else if(age < 18){
            resetOutlineColor(Employee_pic, profileIcon, Employee_lname, Employee_fname,
            Employee_mname, E_contact, E_email, Emp_Add, Emp_Muni,
            Emp_Brgy, Job_shop, SSS_No, SSS_File, PhilH_No, PhilH_File, PIbig_No, PIbig_File,
            Agreement, Emp_Sign);
            
            alert('You must be 18 years old or above to register.');
            Employee_bday.classList.add('invalid-input'); 
        }else{
            valid = true;
        }
        
        if (philHealthNo === '') {
            if (philHealthFileInput) {
                philHealthFileInput.value = '';
            }
        }
        
        if (PIbigNo === '') {
            if (PIbigFileInput) {
                PIbigFileInput.value = ''; 
            }
        }
        
        if(valid){
            resetOutlineColor(Employee_pic, profileIcon, Employee_lname, Employee_fname,
            Employee_mname, Employee_bday, E_contact, E_email, Emp_Add, Emp_Muni,
            Emp_Brgy, Job_shop, SSS_No, SSS_File, PhilH_No, PhilH_File, PIbig_No, PIbig_File,
            Agreement, Emp_Sign);
            
            Employee_info.style.display = 'none';
            Account_info.style.display = 'block';
        }
    });
    
    back2.addEventListener('click', function(){
        event.preventDefault();
        Account_info.style.display = 'none';
        Employee_info.style.display = 'block';
    });
    
    sub2.addEventListener('click', function(){
        event.preventDefault();
        let valid2 = false;
        
        if(Employee_usernm.value === '' || Employee_userps.value === '' || Employee_secps.value === '' ||
           (Employee_userps.value !== Employee_secps.value)){
        
            alert('Please complete the required fields.');
           
            if(Employee_usernm.value === ''){
                Employee_usernm.classList.add('invalid-input');
            }else{
                Employee_usernm.classList.remove('invalid-input');
            }
            
            if(Employee_userps.value === ''){
                Employee_userps.classList.add('invalid-input');
            }else{
                Employee_userps.classList.remove('invalid-input');
            }
            
            if(Employee_secps.value === '' || (Employee_userps.value !== Employee_secps.value)){
                Employee_secps.classList.add('invalid-input');
                if(Employee_userps.value !== Employee_secps.value){
                    Employee_secps.classList.add('invalid-input');
                }
            }else{
                Employee_secps.classList.remove('invalid-input');
            }
        }else{
            valid2 = true;
        }
        
        if(valid2){
            resetOutlineColor(Employee_usernm, Employee_userps, Employee_secps);
            
            //Additional PHP shit here
            
        }
        
        
        
        
    });

    
    
    
    
    
    
    
    
    
});