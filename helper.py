from flask import redirect, render_template, session
from functools import wraps
import PyPDF2

from model import summary
