import pygal
def main():
	line_chart = pygal.Bar()
	line_chart.title = 'Browser usage evolution (in %)'
	line_chart.x_labels = map(str, range(90, 100))
	line_chart.add('Salmon', 20)
	line_chart.add('Pork', 20)
	line_chart.add('Nuts', 20)
	line_chart.add('Tofu', 20)
	line_chart.add('Milk', 20)
	line_chart.render_to_file('testsvg.svg')
main()