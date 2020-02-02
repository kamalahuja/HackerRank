package org.kamal.hackerrank;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class FrequencyQuery {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		FrequencyQuery freqQuery = new FrequencyQuery();
		List<List<Integer>> queries = new ArrayList<List<Integer>>();
		List<Integer> test = new ArrayList<Integer>(2);
		test.add(1);
		test.add(1);
		queries.add(test);
		test = new ArrayList<Integer>(2);
		test.add(2);
		test.add(2);
		queries.add(test);
		
		test = new ArrayList<Integer>(2);
		test.add(3);
		test.add(2);
		queries.add(test);
		
		test = new ArrayList<Integer>(2);
		test.add(1);
		test.add(1);
		queries.add(test);
		
		test = new ArrayList<Integer>(2);
		test.add(1,1);
		queries.add(test);
		
		test = new ArrayList<Integer>(2);
		test.add(2,1);
		queries.add(test);

		test = new ArrayList<Integer>(2);
		test.add(3,2);
		queries.add(test);
		System.out.println(freqQuery.freqQuery(queries));
	}
	
	private void remvoeIntegerOccurrences (List<Integer> finalList, Integer numberToRemove) {
		finalList = finalList.stream().filter(numParam ->  (numberToRemove == numParam)).collect(Collectors.toList());
	}
	
	public List<Integer> freqQuery(List<List<Integer>> queries ) {
		List<Integer> returnList = new ArrayList<Integer>();
		List<Integer> finalList = new ArrayList<Integer>();
		Map<Integer, Integer> frequencyMap = new HashMap<Integer, Integer>();
		for(List<Integer> query : queries) {
			switch(query.get(0)) {
				case 1 :
					returnList.add(query.get(1));
					if(frequencyMap.containsKey((query.get(1)))) {
						frequencyMap.put(query.get(1), frequencyMap.get(query.get(1)) + 1);
					} else {
						frequencyMap.put(query.get(1), 0);
					}
					break;
				case 2 :
					this.remvoeIntegerOccurrences(returnList, query.get(1));
					frequencyMap.replace(query.get(1), frequencyMap.get(query.get(1)) - 1);
					break;
				case 3 :
					boolean isMatchEntry = false;
					for(Map.Entry<Integer, Integer> mapEntry : frequencyMap.entrySet()) {
						if(mapEntry.getValue() == query.get(1)) {
								System.out.print(1);
								finalList.add(1);
								isMatchEntry = true;
								break;
						}
					}
					if(!isMatchEntry) {
						finalList.add(0);
						System.out.print(0);
					}
					
					
					
			}
		}
		return finalList;
	}
	
	

}


