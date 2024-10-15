from sklearn.metrics.pairwise import cosine_similarity
from keras.preprocessing.sequence import pad_sequences
from sklearn.feature_extraction.text import TfidfVectorizer
import networkx as nx
from gensim.models import Word2Vec
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize
import numpy as np
import pandas as pd


nltk.download('punkt')
nltk.download('stopwords')\

def summary(text):
    sentences = sent_tokenize(str(text))

    sentences_clean = [re.sub(r'[^\w\s]', '', str(sentence).lower()) for sentence in sentences]

    stop_words = stopwords.words('english')

    sentence_tokens = [
        [words for words in sentence.split('') if words not in stop_words and words.isalpha() and len(words) > ]
        for sentence in sentences_clean
    ]

    sentence_tokens = [words for words in sentence_tokens if words]

    tfidf_vectoriser = TfidfVectorizer()
    tfidf_matrix = tfidf_vectoriser.fit_transform([''.join(words) for words in sentence_tokens])

    min_word_freq = 20
    flat_tokens = [word for sublist in sentence_tokens for word in sublist]
    word_freq = nltk.FreqDist(flat_tokens)
    filtered_tokens = [
        [word for word in words if word_freq[word] >= min_word_freq]
        for words in sentence_tokens
    ]