const baseUrl = "https://api.themoviedb.org/3";
const Api = "7cb2757cea5b3c70d9505cae5deba51c";
const language = "&language=en-US&page=1";

// const data = baseUrl+"/trending/all/week?api_key="+Api;

const data = {
    // https://api.themoviedb.org/3/discover/tv?api_key=7cb2757cea5b3c70d9505cae5deba51c&language=en-US&region=US&networks=Netflix
    netflix_originals: baseUrl+"/discover/tv?api_key="+Api+"&language=en-US&region=US&networks=Netflix",
    trending: baseUrl+"/trending/all/week?api_key="+Api,
    popular_tv_shows: baseUrl+"/tv/popular?api_key="+Api+language,
    action_movies: baseUrl+"/discover/movie?api_key="+Api+"&with_genres=28",
    comedy_movies: baseUrl+"/discover/movie?api_key="+Api+"&with_genres=35",
    crime_movies: baseUrl+"/discover/movie?api_key="+Api+"&with_genres=80",
    family: baseUrl+"/discover/movie?api_key="+Api+"&with_genres=10751",
    science_fiction: baseUrl+"/discover/movie?api_key="+Api+"&with_genres=878",
    // documentary: baseUrl+"/discover/movie?api_key="+Api+"&with_genres=99",

    // latest_movies: baseUrl+"/movie/latest?api_key="+Api+language,
}

const questions = [
    {
        id: 0,
        ques: 'What is Netflix?',
        ans: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There always something new to discover, and new TV shows and movies are added every week!'
    },

    {
        id: 1,
        ques: 'How much does Netflix cost?',
        ans: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.'
    },

    {
        id: 2,
        ques: 'How do i cancel?',
        ans: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
    },
    
    {
        id: 3,
        ques: 'Where can I watch on Netflix?',
        ans: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    },

    {
        id: 4,
        ques: 'Is Netflix good for kids?',
        ans: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you dont want kids to see.'
    },


]

export default data;
export {questions} 