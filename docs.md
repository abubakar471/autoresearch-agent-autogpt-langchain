# ground work for initializing the project

### creating virtual environment
    $ pip install virtualenv
    $ python -m venv venv
    <!-- activating venv -->
    in root directory run this command to activate the venv
    $ .\venv\Scripts\Activate.ps1

    <!-- deactivating venv -->
    while the venv activated run 
    $ deactivate

    <!-- to generate a requirements.txt -->
    $  pip freeze > requirements.txt
    
    <!-- when u clone this or someone need to clone its packages they can simply run this command to get this project get working -->
    $ pip install -r requirements.txt

### installing packages for backend
    $ pip install flask langchain==0.0.148 python-dotenv google-search-results openai tiktoken faiss-cpu
    
### creating the frontend dir
    make a new directory in root folder called autoreserach-client , using this in root dir : 
    $ npx create-react-app autoresearch-client --template typescript 
    it will serve as our frontend,
    it will be created with react and typescript
    navigate to autoresearch-client and install 
    npm install axios
    npm install -D tailwindcss
    npx tailwindcss init


----------------------------------
# errors 

### virtual environment error
    while running this app for the first time i forgot to
    run it while the virtual environment was active, so we 
    need to do :
    $ .\venv\Scripts\Activate.ps1

    then a error occured because i installed the latest version of langchain, that does not have the autonomous
    agent dir in it, so i uninstalled first the langchain
    $ pip uninstall langchain
    
### importing autogpt error
    then i installed it again , using sepecific version, 
    $ pip install langchain==0.0.148

    the command below are used for pdf parsers, but i suppose we wont be using these for this project, 
    i listed them below only because i dont want to forget 
    this package name, and these might be useful for our 
    hackathon project
    $ pip install PyPDF2
    $ pip install PyCryptodome

