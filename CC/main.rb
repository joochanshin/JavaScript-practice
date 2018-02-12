array = [1,2,3,-5,-6,-7,4]

def filt(arr)
	result = arr.select do |elem|
  		elem >= 0 && elem % 2 == 1
	end
end

print filt(array)