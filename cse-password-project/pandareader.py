import pandas 
def main():
    df = pandas.read_excel(r'englishwords.xlsx')
    df = df.values.tolist()
    return df