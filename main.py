import matplotlib.pyplot
import pandas

csv = pandas.read_csv('data.csv')

csv['net_price'] = csv['price']  - csv['discount']
csv['total_amt'] = csv['qty'] * csv['price']


csv.to_csv('newData.csv',index=False)

matplotlib.pyplot.plot(csv['productName'],csv['price'])
matplotlib.pyplot.title('priceLine')
matplotlib.pyplot.show()
