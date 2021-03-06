export default {
	'locale': 'zh-TW',
	'date': {
		'hour24': false,
		'formats': {
			'dateFormats': {
				'full': 'yyyy年M月d日',
				'medium': 'yyyy年M月d日',
				'short': 'yyyy/M/d',
				'monthYear': 'yyyy年M月',
				'monthDay': 'M月d日'
			},
			'timeFormats': {
				'full': 'tt hh:mm ZZZ',
				'medium': 'tt hh:mm',
				'short': 'tt hh:mm'
			}
		},
		'calendar': {
			'type': 'gregorian',
			'firstDayOfWeek': 0,
			'weekendStartDay': 6,
			'weekendEndDay': 0,
			'months': {
				'short': [
					'一月',
					'二月',
					'三月',
					'四月',
					'五月',
					'六月',
					'七月',
					'八月',
					'九月',
					'十月',
					'十一月',
					'十二月'
				],
				'long': [
					'一月',
					'二月',
					'三月',
					'四月',
					'五月',
					'六月',
					'七月',
					'八月',
					'九月',
					'十月',
					'十一月',
					'十二月'
				]
			},
			'days': {
				'narrow': [
					'日',
					'一',
					'二',
					'三',
					'四',
					'五',
					'六'
				],
				'short': [
					'日',
					'一',
					'二',
					'三',
					'四',
					'五',
					'六'
				],
				'long': [
					'星期天',
					'星期一',
					'星期二',
					'星期三',
					'星期四',
					'星期五',
					'星期六'
				]
			},
			'dayPeriods': {
				'am': '上午',
				'pm': '下午'
			}
		}
	},
	'number': {
		'patterns': {
			'decimal': {
				'positivePattern': '{number}',
				'negativePattern': '-{number}'
			},
			'percent': {
				'positivePattern': '{number}%',
				'negativePattern': '-{number}%'
			}
		},
		'symbols': {
			'decimal': '.',
			'group': ',',
			'negative': '-',
			'percent': '%'
		},
		'groupSize': 3
	},
	'fileSize': {
		'patterns': {
			'fileSizePattern': '{number} {unit}'
		},
		'units' : {
			'gigabyte': 'GB',
			'megabyte': 'MB',
			'kilobyte': 'KB',
			'bytes': '位元組',
			'byte': '位元組'
		}
	}
};
